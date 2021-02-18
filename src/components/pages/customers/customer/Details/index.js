import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import CustomerInfo from './CustomerInfo';

import CustomerProjectdetail from './CustomerProjectdetail';
import Results from './Results';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Details({ customer, className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <CustomerInfo customer={customer} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        {/* <CustomerProjectdetail customer={customer} /> */}
        <Results />
      </Grid>
    </Grid>
  );
}

export default Details;
