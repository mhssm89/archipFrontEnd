import React from 'react';

import { makeStyles } from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

/// make a request to get all the customers
// using auto complete to fill the customer name
import FormAsyncAutocomplete from 'src/components/controls/FormAsyncAutocomplete';
import PoqAutocomplete from 'src/components/controls/PoqAutocomplete';
const useStyles = makeStyles(() => ({
  root: {},
  buttonreset: {
    marginRight: 15,
    backgroundColor: '#be2f29',
  },
}));

const validationSchema = yup.object().shape({
  poqnumber: yup.number().required('Required.'),
  poqname: yup.object(),
});

function PoqSearchForm({ className, customer, onChange, ...rest }) {
  const classes = useStyles();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      poqnumber: '',
      poqname: null,
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    reset,
    getValues,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // NOTE: Make API request
      onChange(getValues('poqname'));
      reset();
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message,
      });
    }
  };
  onChange(getValues('poqname'));
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <PoqAutocomplete
          label="BOQ #"
          name="poqname"
          margin="normal"
          variant="outlined"
          errorObj={errors}
        />
      </form>
    </FormProvider>
  );
}

export default PoqSearchForm;
