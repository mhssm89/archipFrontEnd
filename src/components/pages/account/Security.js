import React from 'react';

import { useRouter } from 'next/router';

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

import { gql, useApolloClient, useMutation } from '@apollo/client';
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
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters')
    .max(255)
    .required('Required.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match.")
    .required('Required.'),
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
function Security({ className, ...rest }) {
  const classes = useStyles();
  const { user, logout } = useAuth();
  const router = useRouter();
  const client = useApolloClient();
  const [updateUser, { loading }] = useMutation(UPDATE_USER);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      password: '',
      passwordConfirm: '',
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
          <CardHeader title="Change Password" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <FormInput
                  type="password"
                  name="password"
                  label="New Password"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  type="password"
                  name="passwordConfirm"
                  label="New Password Confirmation"
                  variant="outlined"
                  errorObj={errors}
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
                Change Password
              </Button>
            )}
          </Box>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ password }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }

      // Contruct input
      const input = { where: { id: user.id }, data: { password } };

      // Make an API request
      await updateUser({ variables: { input } });

      // Show success message
      enqueueSnackbar('Password changed successfully. Please login again.', {
        variant: 'success',
      });

      // logout and login again
      client.clearStore();
      await logout(() => router.push('/login'));
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error changing password.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error changing password.',
      });
    }
  }
}

export default Security;
