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
import { useRouter } from 'next/router';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import clsx from 'clsx';
import { resetWarningCache } from 'prop-types';
import { values } from 'lodash';
const validationSchema = yup.object().shape({
  amount: yup.number().required('required'),
  date: yup.date().nullable().typeError('Invalid date.').required('Required.'),
  type: yup.object().nullable().required('Required.'),
  description: yup.string(255),
  banktransaction: yup.number().nullable(),
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
  { label: 'Income', value: 'in' },
  { label: 'OutCome', value: 'out' },
];

function Invoices({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();

  const [invoices, setInvoices] = React.useState([]);

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

  //////////////////////////////////////
  const getInvoices = React.useCallback(async () => {
    try {
      const projectId = router.query['projectId'];
      const res = await axios.get(
        `http://localhost:1337/transactions?_where[project]=${projectId}`,
      );
      const data = res.data;
      if (isMountedRef.current) {
        setInvoices(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getInvoices();
  }, []);

  /////////////////////////////////////

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
              alignItems="center">
              <Grid item md={4} xs={12}>
                {/* amount of money*/}
                <FormInput
                  name="amount"
                  label="Amount (EGP)"
                  variant="outlined"
                  type="number"
                  errorObj={errors}
                />
              </Grid>
              {/* transaction type */}
              <Grid item md={4} xs={12}>
                <FormAutocomplete
                  name="type"
                  label="Transaction type"
                  variant="outlined"
                  options={trasactionoption}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <DatePicker
                  name="date"
                  label="Transaction Date"
                  variant="outlined"
                  className={classes.datepicker}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                {/* Add Button */}
                <FormInput
                  name="banktransaction"
                  label="Bank Transaction Number"
                  variant="outlined"
                  margin="auto"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                {/* Add Button */}
                <FormInput
                  name="description"
                  label="Description"
                  variant="outlined"
                  margin="auto"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={12}>
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
        <TransactionResult query={invoices} setinvoices={setInvoices} />
      </Card>
    </>
  );
  async function onSubmit({
    amount,
    date,
    description,
    type,
    banktransaction,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const projectId = router.query['projectId'];
      const data = {
        amount: amount,
        date: date,
        bankTransaction: banktransaction,
        description: description,
        type: type['value'],
        project: projectId,
      };

      const res = axios.post('http://localhost:1337/transactions', data);
      setInvoices([...invoices, (await res).data]);

      // Show success message
      reset({
        amount: '',
        date: '',
        description: '',
        type: '',
        banktransaction: '',
      });
      reset(values);
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
