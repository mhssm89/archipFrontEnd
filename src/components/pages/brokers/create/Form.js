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
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormInput from 'src/components/controls/FormInput';
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
  category: yup.object(),
  address: yup.string().max(255),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const [fields, setFields] = React.useState([{ value: null }]);
  const { enqueueSnackbar } = useSnackbar();
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
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
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

              {fields.map((field, idx) => {
                return (
                  <>
                    <Grid container spacing={3} item md={6} xs={12}>
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
              <Grid item md={2} xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAdd()}>
                  +
                </Button>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormInput
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  errorObj={errors}
                />
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

  // ##################################################
  async function onSubmit({
    firstName,
    lastName,
    company,
    position,
    email,
    address,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      const phones = fields.map((item) => {
        return item.value;
      });
      var phone = phones.join(' - ');
      setValue('submitError', '');

      const data = {
        firstname: firstName,
        lastname: lastName,
        companyname: company,
        position: position,
        emailaddress: email,
        phonenumber: phone,
        address: address,
      };
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_BACKENDURL}/brokers/`, data)
        .then(() => {
          reset();
          enqueueSnackbar('Broker created successfully.', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Error creating new Broker.', { variant: 'error' });
        });
      reset();

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
      enqueueSnackbar('Error creating new Broker.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new broker.',
      });
    }
  }
}

export default Form;
