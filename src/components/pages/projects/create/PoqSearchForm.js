import React from 'react';

import { makeStyles } from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

/// make a request to get all the customers
// using auto complete to fill the customer name
import FormAsyncAutocomplete from 'src/components/controls/FormAsyncAutocomplete';

const useStyles = makeStyles(() => ({
  root: {},
  buttonreset: {
    marginRight: 15,
    backgroundColor: '#be2f29',
  },
}));

const validationSchema = yup.object().shape({
  poqnumber: yup.number().required('Required.'),
});

function PoqSearchForm({ className, customer, ...rest }) {
  const classes = useStyles();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      poqnumber: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // NOTE: Make API request
      console.log(data);
      reset();
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <FormAsyncAutocomplete
          label="Product Name"
          name="productname"
          margin="normal"
          variant="outlined"
          errorObj={errors}
        />
      </form>
    </FormProvider>
  );
}

export default PoqSearchForm;
