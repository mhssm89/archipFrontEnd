import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
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

import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import FormInput from 'src/components/controls/FormInput';
import FormSwitch from 'src/components/controls/FormSwitch';

import countries from './countries';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  canHire: yup.bool(),
  city: yup.string().max(255),
  country: yup.string().max(255),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  isPublic: yup.bool(),
  name: yup.string().max(255).required('Name is required'),
  phone: yup.string(),
  state: yup.string(),
});

function GeneralSettings({ className, user, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      canHire: user.canHire || false,
      city: user.city || '',
      country: user.country || '',
      email: user.email || '',
      isPublic: user.isPublic || false,
      name: user.name || '',
      phone: user.phone || '',
      state: user.state || '',
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
      enqueueSnackbar('Profile updated', {
        variant: 'success',
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
                  helperText="We will use this email to contact you"
                  variant="outlined"
                  errorObj={errors}
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="phone"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormAutocomplete
                  name="country"
                  label="Country"
                  options={countries}
                  fullWidth
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="state"
                  label="State/Region"
                  variant="outlined"
                  fullWidth
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" color="textPrimary">
                  Make Contact Info Public
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Means that anyone viewing your profile will be able to see
                  your contacts details
                </Typography>
                <FormSwitch name="isPublic" errorObj={errors} />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h6" color="textPrimary">
                  Available to hire
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Toggling this will let your teammates know that you are
                  available for acquiring new projects
                </Typography>
                <FormSwitch name="canHire" errorObj={errors} />
              </Grid>
            </Grid>
            {errors.submitError && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submitError.message}
                </FormHelperText>
              </Box>
            )}
          </CardContent>
          <Divider />
          <Box p={2} display="flex" justifyContent="flex-end">
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained">
              Save Changes
            </Button>
          </Box>
        </Card>
      </form>
    </FormProvider>
  );
}

export default GeneralSettings;
