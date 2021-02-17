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

function ProjectReview({
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
          Project Review
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Please review all products attached to this project before save
        </Typography>

       
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
            Complete
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}

export default ProjectReview;
