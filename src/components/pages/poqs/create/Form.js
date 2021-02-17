import React from 'react';

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
  IconButton,
  makeStyles,
  SvgIcon,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Plus as PlusIcon } from 'react-feather';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';

import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400,
    },
  },
  addProduct: {
    marginLeft: theme.spacing(2),
  },
}));

const validationSchema = yup.object().shape({
  number: yup.number().required('Required.'),
  customerName: yup.object().nullable().required('Required.'),
  startDate: yup
    .date()
    .nullable()
    .typeError('Invalid date.')
    .required('Required.'),
  endDate: yup
    .date()
    .nullable()
    .typeError('Invalid date.')
    .required('Required.'),
  shippingAddress: yup.string().max(255).required('Required.'),
  shippingCost: yup.number().required('Required.'),
  otherCosts: yup.number(),
  totalCost: yup.number().required('Required.'),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      number: '',
      customerName: null,
      startDate: new Date(),
      endDate: new Date(),
      shippingAddress: '',
      shippingCost: 0,
      otherCosts: 0,
      totalCost: 0,
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
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            {/* Basic */}
            <Card>
              <CardHeader title="Basic" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {/* Number # */}
                  <Grid item xs={12} md={12}>
                    <FormInput
                      name="number"
                      label="Number #"
                      type="number"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Customer name */}
                  <Grid item md={12} xs={12}>
                    <FormAutocomplete
                      name="customerName"
                      label="Customer"
                      options={[]}
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Start Date */}
                  <Grid item md={6} xs={12}>
                    <FormDatePicker
                      name="startDate"
                      label="Start Date"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* End Date */}
                  <Grid item md={6} xs={12}>
                    <FormDatePicker
                      name="endDate"
                      label="End Date"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Shipping Address */}
                  <Grid item md={12} xs={12}>
                    <FormInput
                      name="shippingAddress"
                      label="Shipping Address"
                      variant="outlined"
                      multiline
                      rows={2}
                      errorObj={errors}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Costs */}
            <Box mt={3}>
              <Card>
                <CardHeader title="Prices" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    {/* Cost */}
                    <Grid item xs={12} md={12}>
                      {/* Shipping Cost */}
                      <FormInput
                        name="shippingCost"
                        label="Shipping Cost (L.E)"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {/* Other Costs */}
                      <FormInput
                        name="otherCosts"
                        label="Other Costs (L.E)"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {/* Total Cost */}
                      <FormInput
                        name="totalCost"
                        label="Total Cost (L.E)"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Products */}
          <Grid item xs={12} lg={7}>
            <Card>
              <CardHeader title="Products" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={12}>
                    {/* Product Name */}
                    <FormAutocomplete
                      name="productName"
                      label="Product"
                      options={[]}
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Quantity */}
                  <Grid item md={2} xs={12}>
                    <FormInput
                      name="productQty"
                      label="Quantity"
                      type="number"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  <Grid item md={1} xs={12} alignItems="center">
                    {/* Add Button */}
                    <IconButton color="secondary" onClick={() => {}}>
                      <SvgIcon fontSize="large">
                        <PlusIcon />
                      </SvgIcon>
                    </IconButton>
                  </Grid>
                </Grid>
                {/* Products Table */}
                <Box mt={2}>
                  <Results query="" />
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
      enqueueSnackbar('POQ created successfully.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new POQ.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new POQ.',
      });
    }
  }
}

export default Form;
