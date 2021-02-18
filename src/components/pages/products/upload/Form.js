import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';

import FilesDropzone from './FilesDropzone';
import Results from './Results';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid container spacing={3}>
      {/* Upload Files */}
      <Grid item md={4} xs={12}>
        <Card>
          <CardHeader title="Upload Files" />
          <Divider />
          <CardContent>
            <Box>
              <FilesDropzone />
            </Box>

            <Box mt={5} display="flex" justifyContent="flex-end">
              <Button variant="contained" color="secondary" type="submit">
                Process File
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* View Uploaded Files */}
      <Grid item md={8} xs={12}>
        <Results query="" />
      </Grid>
    </Grid>
  );
}

export default Form;
