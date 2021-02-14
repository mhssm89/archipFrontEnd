import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Example
// const validationSchema = yup.object().shape({
//   gender: yup.string().oneOf[('male', 'female')],
// });

function FormRadio({ name, label = '', options, errorObj = {}, ...props }) {
  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup {...inputProps} ref={ref} row name={name} {...props}>
        {options.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default FormRadio;
