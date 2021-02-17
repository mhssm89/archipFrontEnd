import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import ApplicantCard from './ApplicantCard';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Applicants({ className, applicants, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}>
      {applicants.map((applicant) => (
        <Grid item key={applicant.id} lg={4} xs={12}>
          <ApplicantCard applicant={applicant} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Applicants;
