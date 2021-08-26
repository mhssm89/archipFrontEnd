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
import Results from 'src/components/pages/projects/scope/Result';

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
  scopeName: yup.string().max(255).required('Required.'),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const [Scope, setScope] = React.useState([]);
  const [edit, setEdit] = React.useState([0]);
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      scopeName: '',
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

  const getScope = React.useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:1337/project-scopes');
      const data = res.data;
      if (isMountedRef.current) {
        setScope(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getScope();
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardHeader title="New project scope" />
          <Divider />
          <Grid
            container
            spacing={2}
            className={classes.inputForm}
            alignItems="center">
            <Grid item md={4} xs={12}>
              {/* amount of money*/}
              <FormInput
                name="scopeName"
                label="Scope"
                variant="outlined"
                errorObj={errors}
              />
            </Grid>
            <Grid item md={2} xs={12}>
              {/* Add Button */}
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submitbutton}
                disabled={isSubmitting}>
                ADD
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Card className={clsx(classes.result, className)}>
          <CardHeader title="Aviliable project Scope" />
          <Divider />
          <Box mt={3}>
            <Results query={Scope} setScope={setScope} setvalue={setValue} />
          </Box>
        </Card>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit({ scopeName }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      //make  api request :
      const data = { scope: scopeName };
      const res = axios.post('http://localhost:1337/project-scopes', data);
      setScope([...Scope, (await res).data]);
      reset();
      enqueueSnackbar('Project Scope successfully created', {
        variant: 'success',
      });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new Project Scope.', {
        variant: 'error',
      });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new Project scope.',
      });
    }
  }
}

export default Form;
