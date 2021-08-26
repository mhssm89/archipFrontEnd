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
const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  supplierName: yup.string().max(255).required('Required.'),
  email: yup.string().email('Invalid email.').max(255),
  phonenumber: yup.string(),
  description: yup.string().max(255),
});

function Form({ className, supplier, ...rest }) {
  const router = useRouter();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      supplierName: supplier.supplierName || '',
      email: supplier.emailaddress || '',
      phonenumber: supplier.phonenumber || '',
      description: supplier.description || '',
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
              <Grid item md={8} xs={12}>
                <FormInput
                  name="supplierName"
                  label="Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>

              <Grid item md={8} xs={12}>
                <FormInput
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <FormInput
                  name="phonenumber"
                  label="Phone Number"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <FormInput
                  name="description"
                  label="Description"
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
  async function onSubmit({ supplierName, email, phonenumber, description }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }
      const supplierId = router.query['supplierId'];
      const data = {
        supplierName: supplierName,
        emailaddress: email,
        phonenumber: phonenumber,
        description: description,
      };

      const response = await axios
        .put('http://localhost:1337/suppliers/' + supplierId, data)
        .then(() => {
          enqueueSnackbar('supplier edit successfully.', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error edit  supplier.', { variant: 'error' });
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
      enqueueSnackbar('Error updating supplier.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error updating supplier.',
      });
    }
  }
}

export default Form;
