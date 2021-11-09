import React from 'react';
import axios from 'axios';

// import { API } from 'aws-amplify';
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useController, useFormContext } from 'react-hook-form';

// import { listProductKinds } from 'src/graphql/queries';
import { errorHandler } from 'src/components/controls/utils';

// Validation Schema
// const validationSchema = yup.object().shape({
//   country: yup.object().nullable().required('Country is required'),
// });

function currencyAutocomplete({ name, label = '', errorObj = {}, ...props }) {
  const { control } = useFormContext();
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name,
    control,
  });
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { isError, errorMessage } = errorHandler(name, errorObj);

  async function onChangeHandle(value) {
    //if (!value) return;
    setLoading(true);
    // Make an API request
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDURL}/poqs?_where[isDeleted]=0`,
    );
    setOptions(
      response.data.map((item) => ({
        id: item.id,
        name: item.Name,
        customer: item.customer.firstName + ' ' + item.customer.lastName,
        customerId: item.customer.id,
        grandtotal: item.grandTotal,
        shippingAddress: item.shippingAddress,
        shippingcost: item.shippingCost,
        othercost: item.otherCost,
        vat: item.vat,
        productTotalCost: item.productTotalcost,
        subtotal: item.subtotal,
        totaldiscount: item.totalDiscount,
        profit: item.profit,
        dollarTransferRate: item.dollarTransferRate,
        euroTransferRate: item.euroTransferRate,
      })),
    );
    setLoading(false);
  }

  React.useEffect(() => {
    //if (!open) setOptions([]);
    onChangeHandle();
  }, [open]);

  return (
    <FormControl fullWidth error={isError}>
      <Autocomplete
        {...inputProps}
        ref={ref}
        open={open}
        options={options}
        loading={loading}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(_, data) => {
          onChange(data);
        }}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name == value.name}
        renderOption={(option) => <span>{option.name}</span>}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            error={isError}
            //onChange={(e) => onChangeHandle(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress size={25} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        {...props}
      />
      {isError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default currencyAutocomplete;
