import React from 'react';

import {
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import { PlusCircle as PlusIcon } from 'react-feather';

import Link from 'src/components/common/Link';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            href="/projects"
            component={Link}>
            Projects
          </Link>
          <Typography variant="body1" color="textPrimary">
            Browse
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          See the latest opportunities
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          component={Link}
          href="/projects/create"
          variant="contained"
          startIcon={
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          }>
          Add new project
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
