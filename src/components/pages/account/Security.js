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
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormInput from 'src/components/controls/FormInput';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters')
    .max(255)
    .required('Required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

function Security({ className, ...rest }) {
  const classes = useStyles();
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
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // NOTE: Make API request
      console.log(data);
      reset();
      enqueueSnackbar('Password updated', {
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
          <CardHeader title="Change Password" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={4} sm={6} xs={12}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <FormInput
                  type="password"
                  name="passwordConfirm"
                  label="Password Confirmation"
                  margin="normal"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
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
              Change Password
            </Button>
          </Box>
        </Card>
      </form>
    </FormProvider>
  );
}

export default Security;
