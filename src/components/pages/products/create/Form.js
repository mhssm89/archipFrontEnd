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

import CurrencyAutocomplete from './currencyAutocomplete';
import SupplierAutoComplete from 'src/components/pages/products/upload/supplierAutocomplete.js';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  partNo: yup.string().max(255).required('Required.'),
  brand: yup.string().max(255).required('Required.'),
  name: yup.string().max(255).required('Required.'),
  description: yup.string().max(255),
  price: yup.number().required('Required.'),
  discount: yup.string().max(255),
  currency: yup.object(),
  supplierName: yup.object(),
});

// const BRAND_OPTIONS = [
//   { id: 1, label: 'Brand 1' },
//   { id: 2, label: 'Brand 2' },
// ];

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      partNo: '',
      brand: '',
      name: '',
      description: '',
      price: '',
      discount: 0,
      submitError: '',
      supplierName: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    watch,
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
                  name="partNo"
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
                  name="name"
                  label="Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FormInput
                  name="description"
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
                  label="Price "
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
  async function onSubmit({
    partNo,
    brand,
    name,
    description,
    price,
    currency,
    supplierName,
    discount,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const input = {
        partNumber: partNo,
        partName: name,
        brand: brand,
        discount: discount,
        desc: description,
        price: price,
        currency: currency['id'],
        supplier: supplierName['id'],
      };

      console.log(input);

      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };
      const resp = await axios
        .post(`${process.env.NEXT_PUBLIC_BACKENDURL}/products`, input)
        .then(() => {
          reset();
          enqueueSnackbar('Product created successfully.', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error creating new product.', { variant: 'error' });
        });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new product.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new product.',
      });
    }
  }
}

export default Form;
