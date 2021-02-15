import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormHelperText,
  Grid,
  makeStyles,
} from '@material-ui/core';

import { gql, useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormInput from 'src/components/controls/FormInput';
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  name: yup.string().max(200).required('Required'),
  email: yup.string().email('Invalid email.').required('Required.'),
});

const UPDATE_USER = gql`
  mutation UPDATE_USER($input: updateUserInput) {
    updateUser(input: $input) {
      user {
        id
        name
        username
        email
        role {
          id
          name
        }
      }
    }
  }
`;

function General({ className, ...rest }) {
  const classes = useStyles();
  const { user, updateUser: updateUserDispatch } = useAuth();
  const [updateUser, { loading }] = useMutation(UPDATE_USER);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      submitError: null,
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    formState: { isDirty },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardHeader title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="name"
                  label="Name"
                  variant="outlined"
                  errorObj={errors}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  type="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  errorObj={errors}
                  disabled
                  fullWidth
                />
              </Grid>
            </Grid>
            {/* Error */}
            {errors.submitError && (
              <Box mt={1} display="flex" justifyContent="center">
                <FormHelperText style={{ fontSize: '18px' }} error>
                  {errors.submitError.message}
                </FormHelperText>
              </Box>
            )}
          </CardContent>
          <Divider />
          <Box p={2} display="flex" justifyContent="flex-end">
            {/* Submit */}
            {loading ? (
              <CircularProgress />
            ) : (
              <Button variant="contained" color="secondary" type="submit">
                Save Changes
              </Button>
            )}
          </Box>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ name }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }

      // Contruct input
      const input = { where: { id: user.id }, data: { name } };

      // Make an API request
      const { data } = await updateUser({ variables: { input } });

      // Update state and localStorage
      await updateUserDispatch(data.updateUser.user);

      // Show success message
      enqueueSnackbar('User settings updated.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error updating user settings.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error updating user settings.',
      });
    }
  }
}

export default General;
