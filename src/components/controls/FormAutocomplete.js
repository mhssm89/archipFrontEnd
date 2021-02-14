import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useController, useFormContext } from 'react-hook-form';

import { errorHandler } from './utils';

// Validation Schema
// const validationSchema = yup.object().shape({
//   country: yup.object().nullable().required('Country is required'),
// });

function FormAutocomplete({
  name,
  label = '',
  options,
  errorObj = {},
  ...props
}) {
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
      <Autocomplete
        {...inputProps}
        ref={ref}
        options={options}
        onChange={(_, data) => onChange(data)}
        getOptionLabel={(option) => option.label}
        getOptionSelected={(option, value) => option.value == value.value}
        renderOption={(option) => (
          <span>
            {/* {countryToFlag(option.code)} */}
            {option.label}
          </span>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            error={isError}
          />
        )}
        {...props}
      />
      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default FormAutocomplete;

// function countryToFlag(isoCode) {
//   return typeof String.fromCodePoint !== 'undefined'
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, (char) =>
//           String.fromCodePoint(char.charCodeAt(0) + 127397),
//         )
//     : isoCode;
// }
