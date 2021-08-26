import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import xlsx from 'xlsx';
import Supplierautocomplete from './supplierAutocomplete';
import CurrencyAutocomplete from './currencyAutocomplete';
import FilesDropzone from './FilesDropzone';
import Results from './Results';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = makeStyles(() => ({
  root: {},
}));
const validationSchema = yup.object().shape({
  supplier: yup
    .object('supplier name is requierd')
    .shape({ id: yup.number, name: yup.string() })
    .required('supplier name is requierd'),
  currency: yup
    .object('currency is required')
    .shape({ id: yup.number, name: yup.string() })
    .required('currency is required'),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [files, setFiles] = React.useState({});
  const [result, setResult] = React.useState([{}]);

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      supplier: '',
      currency: '',
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
    getValues,
    formState: { isSubmitting },
  } = methods;

  function Submit() {
    const dataArray = [];
    var workbook = xlsx.read(files, { type: 'buffer' });
    workbook.SheetNames.forEach((sheet) => {
      let data = xlsx.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
      data.forEach((row) => {
        if (row) {
          dataArray.push(row);
        }
      });
    });
    setResult([...dataArray]);
    enqueueSnackbar(dataArray.length + ' item has been processed', {
      variant: 'success',
    });
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <FormProvider {...methods}>
            <form
              className={clsx(classes.root, className)}
              onSubmit={handleSubmit(Submit)}
              {...rest}>
              <Card>
                <CardHeader title="Upload Files" />
                <Divider />
                <Box m={2}>
                  <Supplierautocomplete name="supplier" label="supplier" />
                </Box>
                <Box m={2}>
                  <CurrencyAutocomplete
                    name="currency"
                    label="currency "
                    variant="outlined"
                    errorObj={errors}
                  />
                </Box>
                <CardContent>
                  <Box>
                    <FilesDropzone onChange={setFiles} />
                  </Box>
                  <Box mt={5} display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={Submit}
                      disabled={isSubmitting}>
                      Process File
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              {/* View Uploaded Files */}
            </form>
          </FormProvider>
        </Grid>
        <Grid item md={8} xs={12}>
          <Results
            query={result}
            supplier={watch('supplier')}
            currency={watch('currency')}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Form;
