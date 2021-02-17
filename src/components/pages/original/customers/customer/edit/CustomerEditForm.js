import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
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

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  address1: yup.string().max(255),
  address2: yup.string().max(255),
  country: yup.string().max(255),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  hasDiscountedPrices: yup.bool(),
  isVerified: yup.bool(),
  name: yup.string().max(255).required('Name is required'),
  phone: yup.string().max(15),
  state: yup.string().max(255),
});

function CustomerEditForm({ className, customer, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      address1: customer.address1 || '',
      address2: customer.address2 || '',
      country: customer.country || '',
      email: customer.email || '',
      hasDiscountedPrices: customer.hasDiscountedPrices || false,
      isVerified: customer.isVerified || false,
      name: customer.name || '',
      phone: customer.phone || '',
      state: customer.state || '',
      submitError: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // NOTE: Make API request
      console.log(data);
      reset();
      enqueueSnackbar('Customer updated', {
        variant: 'success',
        action: <Button>See all</Button>,
      });
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message,
      });
    }
  };

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
                  name="name"
                  label="Full name"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="email"
                  label="Email address"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="country"
                  label="Country"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="state"
                  label="State/Region"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="address1"
                  label="Address 1"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="address2"
                  label="Address 2"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="phone"
                  label="Phone number"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item />
              <Grid item md={6} xs={12}>
                <Typography variant="h5" color="textPrimary">
                  Email Verified
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Disabling this will automatically send the user a verification
                  email
                </Typography>
                <FormSwitch name="isVerified" color="secondary" edge="start" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5" color="textPrimary">
                  Discounted Prices
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This will give the user discounted prices for all products
                </Typography>
                <FormSwitch
                  name="hasDiscountedPrices"
                  color="secondary"
                  edge="start"
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isSubmitting}>
                Update Customer
              </Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}

export default CustomerEditForm;
