import React from 'react';

import { FormControl, FormHelperText } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// const validationSchema = yup.object().shape({
//   startDate: yup
//     .date()
//     .nullable()
//     .typeError('Invalid date')
//     .required('Start date required'),
// });

function FormDatePicker({
  name,
  label = '',
  helperText = '',
  errorObj = {},
  className = {},
  ...props
}) {
  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl className={className} error={isError}>
        <KeyboardDatePicker
          {...inputProps}
          inputRef={ref}
          label={label}
          format="dd-MM-yyyy"
          error={isError}
          helperText=""
          {...props}
        />
        {(helperText || isError) && (
          <FormHelperText error={isError}>
            {isError ? errorMessage : helperText}
          </FormHelperText>
        )}
      </FormControl>
    </MuiPickersUtilsProvider>
  );
}

export default FormDatePicker;
