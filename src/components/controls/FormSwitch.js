import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@material-ui/core';

import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Example
// const validationSchema = yup.object().shape({
//   acceptTerms: yup
//     .bool()
//     .required('Accept terms and conditions is required.')
//     .oneOf([true], 'Accept terms and conditions is required'),
// });

function FormSwitch({ name, label = '', errorObj = {}, ...props }) {
  const { control } = useFormContext();
  const {
    field: { ref, value, onChange, ...inputProps },
  } = useController({
    name,
    control,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Switch
            {...inputProps}
            inputRef={ref}
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
            {...props}
          />
        }
        label={label}
      />
      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default FormSwitch;
