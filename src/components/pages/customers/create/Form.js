import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormHelperText,
  Grid,
  makeStyles,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormInput from 'src/components/controls/FormInput';
import FormAutocomplete from 'src/components/controls/FormAutocomplete';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  firstName: yup.string().max(255).required('Required.'),
  lastName: yup.string().max(255).required('Required.'),
  company: yup.string().max(255).required('Required.'),
  position: yup.string().max(255),
  email: yup.string().email('Invalid email.').max(255).required('Required.'),
  mobilePhone: yup.string().min(11).max(11).required('Required.'),
  businessPhone1: yup.string(),
  category: yup.string(),
  address: yup.string().max(255),
});

const gategorylist = [
  { label: 'Business ', value: 'Business' },
  { label: 'individual', value: 'individual' },
];

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      email: '',
      mobilePhone: '',
      businessPhone1: '',
      category: '',
      address: '',
      submitError: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    formState: { isSubmitting },
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
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="company"
                  label="Company Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="position"
                  label="Position"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="mobilePhone"
                  label="Phone Number"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="businessPhone1"
                  label="Business Phone Number 1"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormAutocomplete
                  name="category"
                  label="Category"
                  variant="outlined"
                  options={gategorylist}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FormInput
                  name="address"
                  label="Address"
                  variant="outlined"
                  errorObj={errors}
                />
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

            <Box mt={5} display="flex" justifyContent="flex-end">
              {/* Submit */}
              {isSubmitting ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}>
                  Create
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ firstName, lastName }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Make an API request
      // await API.graphql({
      //   query: createProductClass,
      //   variables: { input },
      // });

      // Reset form
      reset();

      // Show success message
      enqueueSnackbar('Customer created successfully.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new customer.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new customer.',
      });
    }
  }
}

export default Form;
