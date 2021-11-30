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
//import TransactionResult from './TransactionResult';
import { useRouter } from 'next/router';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import ProjectAutocomplete from 'src/components/controls/ProjectAutocompelete';

import clsx from 'clsx';
import { resetWarningCache } from 'prop-types';
import { values } from 'lodash';
const validationSchema = yup.object().shape({
  amount: yup.number().required('required'),
  date: yup.date().nullable().typeError('Invalid date.').required('Required.'),
  type: yup.object().nullable().required('Required.'),
  description: yup.string(255).required('required'),
  banktransaction: yup.number().nullable(),
});

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  inputForm: {
    margin: 'auto',
    justifyContent: 'space-evenly',
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

function SGAs({ className, setSGAs, SGAs, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();

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
  //   const getSGAs = React.useCallback(async () => {
  //     try {
  //       const projectId = router.query['projectId'];
  //       const res = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BACKENDURL}/transactions?_where[project]=${projectId}`,
  //       );
  //       const data = res.data;
  //       if (isMountedRef.current) {
  //         setSGAs(data);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }, [isMountedRef]);

  //   React.useEffect(() => {
  //     getSGAs();
  //   }, []);

  /////////////////////////////////////

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(classes.root, className)}
          {...rest}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title="Add SGA" />
            <Divider />
            <Grid container spacing={2} className={classes.inputForm}>
              <Grid item md={3} xs={12}>
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
              <Grid item md={3} xs={12}>
                <FormAutocomplete
                  name="type"
                  label="Transaction type"
                  variant="outlined"
                  options={trasactionoption}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <ProjectAutocomplete
                  name="project"
                  label="Project"
                  variant="outlined"
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
              <Grid item md={3} xs={12}>
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
            </Grid>
            <Grid
              container
              justify={'flex-end'}
              spacing={2}
              style={{ margin: 'auto' }}>
              <Grid item md={3} xs={12}>
                {/* Add Button */}
                <Button
                  style={{ width: '83%' }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  className={classes.submitbutton}
                  disabled={isSubmitting}>
                  ADD
                </Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      </FormProvider>
      {/* <Card className={clsx(classes.result, className)} {...rest}>
        <CardHeader title="Invoces/Billings" />
        <Divider />
        <TransactionResult query={SGAs} setSGAs={setSGAs} />
      </Card> */}
    </>
  );
  async function onSubmit({
    amount,
    date,
    description,
    type,
    banktransaction,
    project,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const projectId = project.id;
      const data = {
        amount: amount,
        date: date,
        bankTransaction: banktransaction,
        description: description,
        type: type['value'],
        project: projectId,
        logestic: 1,
      };

      const res = axios.post(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/transactions`,
        data,
      );
      setSGAs([...SGAs, (await res).data]);

      // Show success message

      reset();
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

export default SGAs;
