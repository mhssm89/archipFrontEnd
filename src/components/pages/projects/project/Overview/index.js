import React from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import Brief from './Brief';
import Files from './Files';
import Members from './Members';
import Metadata from './Metadata';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Overview({ className, project, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}>
      <Grid item lg={8} xl={9} xs={12}>
        <Brief project={project} />
        <Box mt={3}>
          <Files files={project.files} />
        </Box>
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Box mb={3}>
          <Metadata project={project} />
        </Box>
        <Members members={project.members} />
      </Grid>
    </Grid>
  );
}

export default Overview;
