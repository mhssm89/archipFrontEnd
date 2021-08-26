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
import axios from 'axios';
import FormInput from 'src/components/controls/FormInput';
import { useRouter } from 'next/router';
import CustomerCatAuto from 'src/components/controls/CustomerCategoryAuto';
import BrokerAutocomplete from 'src/components/controls/BrokerAutocomplete';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  firstName: yup.string().max(255).required('Required.'),
  lastName: yup.string().max(255).required('Required.'),
  company: yup.string().max(255),
  position: yup.string().max(255),
  email: yup.string().email('Invalid email.').max(255).required('Required.'),
  mobilePhone: yup.string().min(11).max(11).required('Required.'),
  businessPhone1: yup.string(),
  category: yup.object(),
  address: yup.string().max(255),
  broker: yup.object().nullable(),
});

function Form({ className, customer, ...rest }) {
  const router = useRouter();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: customer.firstName || '',
      lastName: customer.lastName || '',
      company: customer.companyName || '',
      position: customer.position || '',
      email: customer.emailaddress || '',
      mobilePhone: customer.phoneNumber || '',
      businessPhone1: customer.businessPhone || '',
      category: customer.customer_category
        ? {
            id: customer.customer_category.id,
            name: customer.customer_category.category,
          } || ''
        : '',
      address: customer.address || '',
      submitError: '',
      broker: customer.broker
        ? {
            id: '1',
            name: `${customer.broker.firstname} ${customer.broker.lastname}`,
          } || ''
        : '',
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
              <Grid item lg={12} spacing={6}>
                <Grid item md={6} xs={12}>
                  <BrokerAutocomplete
                    name="broker"
                    label="Broker"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Grid>
              </Grid>
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
                  label="Business Phone Number "
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CustomerCatAuto
                  name="category"
                  label="Category"
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
    category,
    broker,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }

      const customerId = router.query['customerId'];
      const data = {
        firstName: firstName,
        lastName: lastName,
        companyName: company,
        position: position,
        emailaddress: email,
        phoneNumber: mobilePhone,
        customer_category: category.id,
        address: address,
        broker: broker ? broker.id : null,
      };
      const response = await axios
        .put('http://localhost:1337/customers/' + customerId, data)
        .then(() => {
          enqueueSnackbar('Customer created successfully.', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error creating new customer.', { variant: 'error' });
        });
      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Make an API request

      // Show success message
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error updating customer.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error updating customer.',
      });
    }
  }
}

export default Form;
