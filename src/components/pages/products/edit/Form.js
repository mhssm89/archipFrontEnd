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

import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';
import FormSelect from 'src/components/controls/FormSelect';
import FormSlider from 'src/components/controls/FormSlider';
import CurrencyAutocomplete from '../create/currencyAutocomplete';
import SupplierAutoComplete from 'src/components/pages/products/upload/supplierAutocomplete.js';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  partNumber: yup.string().max(255).required('Required.'),
  brand: yup.string().max(255).required('Required.'),
  partName: yup.string().max(255).required('Required.'),
  desc: yup.string().max(255).required('Required.'),
  price: yup.number().required('Required.'),
  discount: yup.number().min(0).max(100).required('Required.'),
  currency: yup.object(),
  supplierName: yup.object(),
});

function Form({ className, product, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      partNumber: product.partNumber || '',
      brand: product.brand || '',
      partName: product.partName || '',
      desc: product.desc || '',
      price: product.price || '',
      discount: product.discount || 0,
      submitError: '',
      supplierName: {
        label: product.supplier['supplierName'],
        value: product.supplier['supplierName'],
      },
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    watch,
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
                  name="partNumber"
                  label="Part #"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="brand"
                  label="Brand"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FormInput
                  name="partName"
                  label="Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FormInput
                  name="desc"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="price"
                  label="Price (EGP)"
                  type="number"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CurrencyAutocomplete
                  name="currency"
                  label="currency "
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <SupplierAutoComplete
                  name="supplierName"
                  label="supplier"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <FormInput
                  name="discount"
                  label="Discount"
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
  async function onSubmit({ partNumber }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Return if no data changed
      if (!isDirty) {
        enqueueSnackbar('No data changes.', { variant: 'info' });
        return;
      }

      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Make an API request

      // Show success message
      enqueueSnackbar('Product updated successfully.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error updating product.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error updating product.',
      });
    }
  }
}

export default Form;
