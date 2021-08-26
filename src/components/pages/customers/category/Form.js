import React from 'react';

import {
  Box,
  Button,
  Card,
  Divider,
  CardHeader,
  Grid,
  makeStyles,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import FormInput from 'src/components/controls/FormInput';
import axios from 'axios';
import Results from 'src/components/pages/customers/category/Result';

const useStyles = makeStyles(() => ({
  root: {},
  inputForm: {
    margin: 'auto',
  },
  submitbutton: {
    width: '90%',
  },
  result: {
    marginTop: '20px',
    margin: 'auto',
  },
}));

const validationSchema = yup.object().shape({
  categoryName: yup.string().max(255).required('Required.'),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const [category, setCategory] = React.useState([]);
  const [edit, setEdit] = React.useState([0]);
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      categoryName: '',
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

  const getCategory = React.useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:1337/customer-categories');
      const data = res.data;
      if (isMountedRef.current) {
        setCategory(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardHeader title="New Customer Category" />
          <Divider />
          <Grid
            container
            spacing={2}
            className={classes.inputForm}
            alignItems="center">
            <Grid item md={4} xs={12}>
              {/* amount of money*/}
              <FormInput
                name="categoryName"
                label="Category"
                variant="outlined"
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
                ADD
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Card className={clsx(classes.result, className)}>
          <CardHeader title="Aviliable Customer category" />
          <Divider />
          <Box mt={3}>
            <Results
              query={category}
              setCategory={setCategory}
              setvalue={setValue}
            />
          </Box>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ categoryName }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      //make  api request :
      const data = { category: categoryName };
      const res = axios.post('http://localhost:1337/customer-categories', data);
      setCategory([...category, (await res).data]);
      reset();
      enqueueSnackbar('Customer category successfully created', {
        variant: 'success',
      });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new customer Category.', {
        variant: 'error',
      });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new customer category.',
      });
    }
  }
}

export default Form;
