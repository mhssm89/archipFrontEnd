import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import useAuth from 'src/hooks/useAuth';

import GeneralSettings from './GeneralSettings';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles(() => ({
  root: {},
}));

function General({ className, ...rest }) {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings user={user} />
      </Grid>
    </Grid>
  );
}

export default General;
