import React from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Example
// const validationSchema = yup.object().shape({
//   sel: yup.string().required('Select field is required'),
// });

function FormSelect({
  name,
  label = '',
  options,
  setValue,
  setSelected,
  errorObj = {},
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
    <FormControl fullWidth error={isError} {...props}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        id={name}
        {...inputProps}
        ref={ref}
        {...props}
        onChange={(e) => {
          setValue('filter', { id: e.target.value, label: e.target.name });
          setSelected({ value: e.target.value });
        }}>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default FormSelect;
