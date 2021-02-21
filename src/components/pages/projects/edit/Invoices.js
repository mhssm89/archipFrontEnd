import React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid,
  IconButton,
  SvgIcon,
} from '@material-ui/core';
import FormInput from 'src/components/controls/FormInput';
import DatePicker from 'src/components/controls/FormDatePicker';
import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import TransactionResult from './TransactionResult';

import clsx from 'clsx';
const validationSchema = yup.object().shape({
  amount: yup.number().required('required'),
  date: yup.date().nullable().typeError('Invalid date.').required('Required.'),
  type: yup.object().nullable().required('Required.'),
});

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  inputForm: {
    margin: 'auto',
  },
  submitbutton: {
    width: '90%',
  },
  datepicker: {
    width: '100%',
  },
  result: {
    fontWeightMedium: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    marginTop: 15,
  },
}));
const trasactionoption = [
  { label: 'Income', value: 'income' },
  { label: 'OutCome', value: 'outcome' },
 
];

function Invoices({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
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
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(classes.root, className)}
          {...rest}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title="New Invoice" />
            <Divider />
            <Grid
              container
              spacing={2}
              className={classes.inputForm}
              justify="center"
              alignItems="center">
              <Grid item md={4} xs={12}>
                {/* amount of money*/}
                <FormInput
                  name="amount"
                  label="Amount (L.E)"
                  variant="outlined"
                  type="number"
                  errorObj={errors}
                />
              </Grid>
              {/* transaction type */}
              <Grid item md={3} xs={12}>
                <FormAutocomplete
                  name="type"
                  label="Transaction type"
                  variant="outlined"
                  options={trasactionoption}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <DatePicker
                  name="date"
                  label="Transaction Date"
                  variant="outlined"
                  className={classes.datepicker}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                {/* Add Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  className={classes.submitbutton}
                  disabled={isSubmitting}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      </FormProvider>
      <Card className={clsx(classes.result, className)} {...rest}>
        <CardHeader title="Invoces/Billings" />
        <Divider />
        <TransactionResult/>
      </Card>
    </>
  );
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
      enqueueSnackbar('Transaction Saved', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error in transaction.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error in transaction',
      });
    }
  }
}

export default Invoices;
