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

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  partNo: yup.string().max(255).required('Required.'),
  brand: yup.string().max(255).required('Required.'),
  name: yup.string().max(255).required('Required.'),
  description: yup.string().max(255).required('Required.'),
  price: yup.number().required('Required.'),
  discount: yup.number().min(0).max(100).required('Required.'),
});

const BRAND_OPTIONS = [
  { id: 1, label: 'Brand 1' },
  { id: 2, label: 'Brand 2' },
];

function Form({ className, product, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      partNo: product.partNo || '',
      brand: product.brand || '',
      name: product.name || '',
      description: product.description || '',
      price: product.price || '',
      discount: product.discount || 0,
      submitError: '',
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
                  name="partNo"
                  label="Part #"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormSelect
                  name="brand"
                  label="Brand"
                  options={BRAND_OPTIONS}
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
                  label="Price (EGP)"
                  type="number"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormSlider
                  name="discount"
                  label={`Discount (${watch('discount')}%)`}
                  min={0}
                  max={100}
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
  async function onSubmit({ partNo }) {
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
