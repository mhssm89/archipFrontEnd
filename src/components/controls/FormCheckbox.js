import React from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
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

function FormCheckbox({ name, label = '', errorObj = {}, ...props }) {
  const { control } = useFormContext();
  const {
    field: { ref, value, onChange, ...inputProps },
  } = useController({
    name,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
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

export default FormCheckbox;
