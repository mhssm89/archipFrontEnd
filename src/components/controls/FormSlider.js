import React from 'react';

import {
  FormControl,
  FormHelperText,
  Slider,
  Typography,
} from '@material-ui/core';

import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Example
// const validationSchema = yup.object().shape({
//   age: yup.number().min(20).max(80),
// });

function FormSlider({ name, label = '', min, max, errorObj = {}, ...props }) {
  const { control } = useFormContext();
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name,
    control,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <FormControl fullWidth error={isError}>
      <Typography id={name} gutterBottom>
        {label}
      </Typography>
      <Slider
        {...inputProps}
        ref={ref}
        onChange={(_, data) => onChange(data)}
        aria-labelledby={label}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        {...props}
      />

      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default FormSlider;
