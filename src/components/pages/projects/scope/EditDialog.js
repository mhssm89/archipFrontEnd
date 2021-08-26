import React from 'react';

import {
  Box,
  Button,
  Card,
  Divider,
  CardHeader,
  Grid,
  makeStyles,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import FormInput from 'src/components/controls/FormInput';
import axios from 'axios';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {},
  inputForm: {
    margin: 'auto',
  },
  submitbutton: {
    width: '90%',
  },
  result: {
    marginTop: '20px',
    margin: 'auto',
  },
}));

const validationSchema = yup.object().shape({
  ScopeNameEdit: yup.string().max(255).required('Required.'),
});

function EditDialog({
  className,
  seteditdialoug,
  editScope,
  setScope,
  scope,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ScopeNameEdit: editScope.scope,
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

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardHeader title="Edit Category" />
          <Divider />
          <Grid
            container
            spacing={2}
            className={classes.inputForm}
            alignItems="center">
            <Grid item md={8} xs={12}>
              {/* amount of money*/}
              <FormInput
                name="ScopeNameEdit"
                label="Scope"
                variant="outlined"
                errorObj={errors}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              {/* Add Button */}
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submitbutton}
                disabled={isSubmitting}>
                Edit
              </Button>
            </Grid>
            <Grid item container spacing={2} xs={12} justify={'flex-end'}>
              <Button
                style={{ margin: '2%' }}
                variant="outlined"
                color="secondary"
                onClick={() => {
                  seteditdialoug(false);
                }}
                startIcon={<ArrowLeftIcon fontSize="small" />}>
                Back
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ ScopeNameEdit }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      //make  api request :
      const data = { scope: ScopeNameEdit };
      const res = axios.put(
        `http://localhost:1337/project-scopes/${editScope.id}`,
        data,
      );
      setScope([
        ...scope.filter((item) => item.scope != editScope.scope),
        (await res).data,
      ]);
      seteditdialoug(false);
      enqueueSnackbar('Done edit', {
        variant: 'success',
      });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error edit Project Scope.', {
        variant: 'error',
      });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new project scope',
      });
    }
  }
}

export default EditDialog;
