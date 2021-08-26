import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormHelperText,
  Grid,
  makeStyles,
  Checkbox,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Label from 'src/components/common/Label';
import FormInput from 'src/components/controls/FormInput';
import CustomerCatAuto from 'src/components/controls/CustomerCategoryAuto';
import BrokerAutocomplete from 'src/components/controls/BrokerAutocomplete';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  firstName: yup.string().max(255).required('Required.'),
  lastName: yup.string().max(255).required('Required.'),
  company: yup.string().max(255).required('Required.'),
  position: yup.string().max(255),
  email: yup.string().email('Invalid email.').max(255).required('Required.'),
  phonenumber: yup.string(),
  category: yup.object().nullable().required(),
  address: yup.string().max(255),
  broker: yup.object().nullable(),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [BrokerStatus, setBrokerStatus] = React.useState(false);
  const [fields, setFields] = React.useState([{ value: null }]);
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      email: '',
      phonenumber: '',
      category: '',
      address: '',
      submitError: '',
      broker: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    getValues,
    formState: { isSubmitting },
  } = methods;

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Label label="Broker" variant="outlined" errorObj={errors}>
                  Broker
                </Label>
                <Checkbox
                  checked={BrokerStatus}
                  onChange={() => {
                    handelcheckbox();
                  }}
                />
              </Grid>
              {BrokerStatus && (
                <Grid item lg={12} spacing={6}>
                  <Grid item md={6} xs={12}>
                    <BrokerAutocomplete
                      name="broker"
                      label="Broker"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                </Grid>
              )}

              <Grid item md={6} xs={12}>
                <FormInput
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="company"
                  label="Company Name"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="position"
                  label="Position"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <CustomerCatAuto
                  name="category"
                  label="Category"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>

              {fields.map((field, idx) => {
                return (
                  <>
                    <Grid container spacing={3} item md={8} xs={12}>
                      <Grid item xs={10}>
                        <FormInput
                          name="phonenumber"
                          label="Phone Number"
                          variant="outlined"
                          value={field.value || ''}
                          onChange={(e) => handleChange(idx, e)}
                          errorObj={errors}
                        />
                      </Grid>
                      <Grid item md={2} xs={2}>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => handleRemove(idx)}
                          disabled={fields.length <= 1 ? true : false}>
                          remove
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                );
              })}

              <Grid item md={3} xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAdd()}>
                  +
                </Button>
              </Grid>

              <Grid item md={12} xs={12}>
                <FormInput
                  name="address"
                  label="Address"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
            </Grid>

            {/* Error */}
            {errors.submitError && (
              <Box mt={1} display="flex" justifyContent="center">
                <FormHelperText style={{ fontSize: '24px' }} error>
                  {errors.submitError.message}
                </FormHelperText>
              </Box>
            )}

            <Box mt={5} display="flex" justifyContent="flex-end">
              {/* Submit */}
              {isSubmitting ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}>
                  Create
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );

  function handelcheckbox() {
    setBrokerStatus(!BrokerStatus);
    setValue('broker', null);
  }

  // ##################################################
  async function onSubmit({
    firstName,
    lastName,
    company,
    position,
    email,
    address,
    category,
    broker,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      const phones = fields.map((item) => {
        return item.value;
      });
      var phone = phones.join(' - ');

      const data = {
        firstName: firstName,
        lastName: lastName,
        companyName: company,
        position: position,
        emailaddress: email,
        phoneNumber: phone,
        customer_category: category.id,
        address: address,
        broker: broker,
      };

      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_BACKENDURL}/customers/`, data)
        .then(() => {
          reset();
          enqueueSnackbar('Customer created successfully.', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error creating new customer.', { variant: 'error' });
        });

      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Make an API request
      // await API.graphql({
      //   query: createProductClass,
      //   variables: { input },
      // });

      // Reset form

      // Show success message
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new customer.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new customer.',
      });
    }
  }
}

export default Form;
