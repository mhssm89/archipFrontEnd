import React from 'react';

import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  makeStyles,
  SvgIcon,
  TextField,
  Typography,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Plus as PlusIcon } from 'react-feather';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';

const useStyles = makeStyles((theme) => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2),
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const validationSchema = yup.object().shape({
  projectName: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(255)
    .required('Required'),
  startDate: yup
    .date()
    .nullable()
    .typeError('Invalid date')
    .required('Start date required'),
  endDate: yup
    .date()
    .nullable()
    .typeError('Invalid date')
    .required('End date required'),
});

function ProjectDetails({
  className,
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const classes = useStyles();
  const [tag, setTag] = React.useState('');
  const [tags, setTags] = React.useState(['Full-Time']);
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      projectName: '',
      startDate: new Date(),
      endDate: new Date(),
      submitError: '',
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
          Please select one option
        </Typography>
        <Box mt={2}>
          <Typography variant="subtitle1" color="textSecondary">
            Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam
            fringilla velit sit amet euismod.
          </Typography>
        </Box>
        <Box mt={2}>
          <FormInput
            name="projectName"
            label="Project Name"
            variant="outlined"
            errorObj={errors}
          />
          <Box mt={3} display="flex" alignItems="center">
            <TextField
              fullWidth
              label="Tag"
              name="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              variant="outlined"
            />
            <IconButton
              className={classes.addTab}
              onClick={() => {
                if (!tag) {
                  return;
                }

                setTags([...tags, tag]);
                setTag('');
              }}>
              <SvgIcon>
                <PlusIcon />
              </SvgIcon>
            </IconButton>
          </Box>
          <Box mt={2}>
            {tags.map((tag, i) => (
              <Chip
                variant="outlined"
                key={i}
                label={tag}
                className={classes.tag}
                onDelete={() => {
                  const newTags = tags.filter((t) => t !== tag);

                  setTags(newTags);
                }}
              />
            ))}
          </Box>
          {Boolean(errors.tags) && (
            <Box mt={2}>
              <FormHelperText error>{errors.tags.message}</FormHelperText>
            </Box>
          )}
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

export default ProjectDetails;
