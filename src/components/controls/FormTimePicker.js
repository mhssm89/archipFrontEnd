import React from 'react';

import { FormControl, FormHelperText } from '@material-ui/core';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Example
// const validationSchema = yup.object().shape({
//   startTime: yup
//     .date()
//     .nullable()
//     .typeError('Invalid time')
//     .required('Start time required'),
// });

function FormTimePicker({
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
        <KeyboardTimePicker
          {...inputProps}
          inputRef={ref}
          label={label}
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

export default FormTimePicker;
