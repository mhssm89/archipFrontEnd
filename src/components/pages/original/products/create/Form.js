import React from 'react';

// import { API } from 'aws-amplify';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
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

import FormAsyncAutocomplete from 'src/components/controls/FormAsyncAutocomplete';
import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import FormCheckbox from 'src/components/controls/FormCheckbox';
import FormInput from 'src/components/controls/FormInput';
import FormSwitch from 'src/components/controls/FormSwitch';

const useStyles = makeStyles(() => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400,
    },
  },
}));

const validationSchema = yup.object().shape({
  name: yup.object().shape({
    arEG: yup.string().max(255).required(''),
    enUS: yup.string().max(255),
  }),
  code: yup.string().max(15).required(''),
  partNo: yup.string().max(15).required(''),
  pnc: yup.string().max(7).required(''),
  price: yup.object().shape({
    sales: yup
      .number()
      .min(0, 'Price must be 0 or more.')
      .required('')
      .typeError('Invalid number.'),
    avg: yup
      .number()
      .min(0, 'Price must be 0 or more.')
      .required('')
      .typeError('Invalid number.'),
  }),
  barCode: yup.string().max(15),
  factor: yup
    .number()
    .min(0, 'Factor must be 0 or more.')
    .typeError('Invalid number.'),
  freight: yup
    .number()
    .min(0, 'Freight must be 0 or more.')
    .typeError('Invalid number.'),
  limit: yup.object().shape({
    min: yup
      .number()
      .integer()
      .min(0, 'Limit must be 0 or more.')
      .test(
        'is-lt-max',
        'Min. limit must be less than max. limit.',
        function (value) {
          return value < this.parent.max;
        },
      )
      .required(''),
    max: yup
      .number()
      .integer()
      .min(1, 'Limit must be 1 or more.')
      .test(
        'is-gt-min',
        'Max. limit must be greater than min. limit.',
        function (value) {
          return value > this.parent.min;
        },
      )
      .required(''),
  }),
  isDiscounted: yup.bool(),
  status: yup.bool(),
  productKindId: yup.string().required(''),
  productClassId: yup.string().required(''),
  country: yup.object().nullable(),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: {
        arEG: '',
        enUS: '',
      },
      code: '',
      partNo: '',
      pnc: '',
      price: {
        sales: 0,
        avg: 0,
      },
      barCode: '',
      factor: 0,
      freight: 0,
      limit: {
        min: 0,
        max: 1,
      },
      isDiscounted: false,
      status: true,
      // productKindId: '',
      // productClassId: '',
      country: {
        country: '',
        'citizen-names': '',
        name: '',
        'official-name': '',
        'start-date': '',
      },
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
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            {/* Basic */}
            <Card>
              <CardHeader title="Basic" />
              <Divider />
              <CardContent>
                {/* Arabic name */}
                <Box>
                  <FormInput
                    name="name.arEG"
                    label="Arabic Name"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* English name */}
                <Box mt={2}>
                  <FormInput
                    name="name.enUS"
                    label="English Name"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Factor */}
                <Box mt={2}>
                  <FormInput
                    name="factor"
                    label="Factor (%)"
                    type="number"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Freight */}
                <Box mt={2}>
                  <FormInput
                    name="freight"
                    label="Freight (%)"
                    type="number"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
              </CardContent>
            </Card>
            {/* Limit */}
            <Box mt={3}>
              <Card>
                <CardHeader title="Limit" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      {/* Max. Limit */}
                      <FormInput
                        name="limit.max"
                        label="Max."
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* Min. Limit */}
                      <FormInput
                        name="limit.min"
                        label="Min."
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            {/* Prices */}
            <Box mt={3}>
              <Card>
                <CardHeader title="Prices" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    {/* Price */}
                    <Grid item xs={12} md={6}>
                      {/* Sales price */}
                      <FormInput
                        name="price.sales"
                        label="Sales price"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* Avg. price */}
                      <FormInput
                        name="price.avg"
                        label="Avg. price"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                  {/* Has discount? */}
                  <Box mt={2}>
                    <FormCheckbox name="isDiscounted" label="Has discount?" />
                  </Box>
                  {/* Active */}
                  <Box mt={2}>
                    <Typography variant="h5" color="textPrimary">
                      Active
                    </Typography>
                    <FormSwitch
                      name="status"
                      color="secondary"
                      errorObj={errors}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          {/* Organize */}
          <Grid item xs={12} lg={4}>
            <Card>
              <CardHeader title="Organize" />
              <Divider />
              <CardContent>
                {/* Demo */}
                <Box>
                  <FormAsyncAutocomplete
                    name="country"
                    label="Country"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Product Kind */}
                <Box mt={2}>
                  <FormAutocomplete
                    name="productKindId"
                    label="Product Kind"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Product Class */}
                <Box mt={2}>
                  <FormAutocomplete
                    name="productClassId"
                    label="Product Class"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Code */}
                <Box mt={2}>
                  <FormInput
                    name="code"
                    label="Code"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* Part No. */}
                <Box mt={2}>
                  <FormInput
                    name="partNo"
                    label="Part No."
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                {/* PNC */}
                <Box mt={2}>
                  <FormInput
                    name="pnc"
                    label="PNC"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                <Box mt={2}>
                  {/* Barcode */}
                  <FormInput
                    name="barCode"
                    label="Barcode"
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
              </CardContent>
            </Card>
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

        <Box mt={5}>
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
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit(values) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      console.log(values);
      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Remove name.enUS if not set
      // if (!input.name.enUS) delete input.name.enUS;

      // Make an API request

      // Reset form
      reset();

      // Show success message
      enqueueSnackbar('Product created.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating product.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating product.',
      });
    }
  }
}

export default Form;
