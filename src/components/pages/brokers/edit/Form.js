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
import axios from 'axios';
import { options } from 'numeral';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  firstName: yup.string().max(255).required('Required.'),
  lastName: yup.string().max(255).required('Required.'),
  company: yup.string().max(255).required('Required.'),
  position: yup.string().max(255),
  email: yup.string().email('Invalid email.').max(255),
  mobilePhone: yup.string().min(11).max(11).required('Required.'),
  address: yup.string().max(255),
});

function Form({ className, broker, ...rest }) {
  const classes = useStyles();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: broker.firstname || '',
      lastName: broker.lastname || '',
      company: broker.companyname || '',
      position: broker.position || '',
      email: broker.emailaddress || '',
      mobilePhone: broker.phonenumber || '',
      address: broker.address || '',
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
  async function onSubmit({
    firstName,
    lastName,
    company,
    position,
    email,
    mobilePhone,
    address,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const data = {
        firstname: firstName,
        lastname: lastName,
        companyname: company,
        position: position,
        emailaddress: email,
        phonenumber: mobilePhone,
        address: address,
      };
      const brokerId = router.query['brokerId'];
      const response = await axios
        .put(`${process.env.NEXT_PUBLIC_BACKENDURL}/brokers/${brokerId}`, data)
        .then(() => {
          enqueueSnackbar('Edit complete', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error .', { variant: 'error' });
        });

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

      // Show success message
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error .', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error .',
      });
    }
  }
}

export default Form;
