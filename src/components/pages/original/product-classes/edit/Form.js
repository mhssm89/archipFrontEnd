import React from 'react';

// import { API } from 'aws-amplify';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormHelperText,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormInput from 'src/components/controls/FormInput';
import FormSwitch from 'src/components/controls/FormSwitch';
// import { updateProductClass } from 'src/graphql/mutations';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  name: yup.object().shape({
    arEG: yup.string().max(255).required('Required'),
    enUS: yup.string().max(255),
  }),
  status: yup.bool(),
});

function Form({ className, productClass, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: {
        arEG: productClass?.name.arEG || '',
        enUS: productClass?.name.enUS || '',
      },
      status: productClass?.status == 'ACTIVE' ? true : false,
      submitError: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    formState: { isSubmitting, isDirty, dirtyFields },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="name.arEG"
                  label="Arabic Name *"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="name.enUS"
                  label="English Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5" color="textPrimary">
                  Active
                </Typography>
                <FormSwitch name="status" color="secondary" errorObj={errors} />
              </Grid>
            </Grid>

            {/* Error */}
            {errors.submitError && (
              <Box mt={1} display="flex" justifyContent="center">
                <FormHelperText style={{ fontSize: '24px' }} error>
                  {errors.submitError.message}
                </FormHelperText>
              </Box>
            )}

            <Box mt={5}>
              {/* Submit */}
              {isSubmitting ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}>
                  Save
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit(values) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }

      // Contruct input
      const input = {
        id: productClass.id,
      };

      // Add only edited attributes to input
      if (isDirty)
        Object.keys(dirtyFields).map((key) => (input[key] = values[key]));
      // Convert status from bool to string
      // eslint-disable-next-line no-prototype-builtins
      if (input.hasOwnProperty('status'))
        input.status = input.status ? 'ACTIVE' : 'INACTIVE';

      // Make an API request
      // await API.graphql({
      //   query: updateProductClass,
      //   variables: { input },
      // });

      // Show success message
      enqueueSnackbar('Product Class updated.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating product Class.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating product Class.',
      });
    }
  }
}

export default Form;
