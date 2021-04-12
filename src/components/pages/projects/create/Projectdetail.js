import React from 'react';

import { Box, Button, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';
import FormAutocomplete from 'src/components/controls/FormAutocomplete';

const useStyles = makeStyles((theme) => ({
  root: {},

  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));
const validationSchema = yup.object().shape({
  projectName: yup.string().max(255).required('Project name is required'),
});
const projectStatus = [
  { label: 'Negotiation', value: 'Negotiation' },
  { label: 'Signed', value: 'Signed' },
  { label: 'Inprogress', value: 'Inprogress' },
  { label: 'Finished', value: 'Finished' },
];

const projectscope = [
  { label: 'Personal', value: 'Personal' },
  { label: 'Commercial', value: 'Commercial' },
  { label: 'Industrial', value: 'Industrial' },
];

function Projectdetail({
  className,
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const classes = useStyles();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      projectName: '',
      ProjectScope: '',
      startDate: new Date(),
      endDate: new Date(),
      submitError: '',
      projectStatus: 'Negotiation',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // Call API to store step data in server session
      // It is important to have it on server to be able to reuse it if user
      // decides to continue later.
      console.log(data);
      if (onNext) {
        onNext();
      }
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <Typography variant="h3" color="textPrimary">
          Please insert project details
        </Typography>

        <Box mt={2}>
          <FormInput
            name="projectName"
            label="Project Name"
            variant="outlined"
            errorObj={errors}
          />
          <Box mt={4}>
            <FormAutocomplete
              name="projectStatus"
              label="Project Status"
              variant="outlined"
              options={projectStatus}
              errorObj={errors}
            />
          </Box>
          <Box mt={4}>
            <FormAutocomplete
              name="ProjectScope"
              label="Project Scope"
              variant="outlined"
              options={projectscope}
              errorObj={errors}
            />
          </Box>

          <Box mt={4}>
            <FormDatePicker
              name="startDate"
              label="Start Date"
              format="dd-MM-yyyy"
              className={classes.datePicker}
              inputVariant="outlined"
              errorObj={errors}
            />

            <FormDatePicker
              name="endDate"
              label="End Date"
              format="dd-MM-yyyy"
              className={classes.datePicker}
              inputVariant="outlined"
              errorObj={errors}
            />
          </Box>
          {/* {Boolean(errors.startDate) && (
          <Box mt={2}>
            <FormHelperText error>{errors.startDate.message}</FormHelperText>
          </Box>
        )} */}
          {/* {Boolean(errors.endDate) && (
          <Box mt={2}>
            <FormHelperText error>{errors.endDate.message}</FormHelperText>
          </Box>
        )} */}
        </Box>
        <Box mt={6} display="flex">
          {onBack && (
            <Button onClick={onBack} size="large">
              Previous
            </Button>
          )}
          <Box flexGrow={1} />
          <Button
            color="secondary"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            size="large">
            Next
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}

export default Projectdetail;
