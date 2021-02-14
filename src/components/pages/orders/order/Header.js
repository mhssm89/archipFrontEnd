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
import { Edit as EditIcon } from 'react-feather';

import Link from 'src/components/common/Link';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Dashboard
          </Link>
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Management
          </Link>
          <Typography variant="body1" color="textPrimary">
            Orders
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Order Details
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          startIcon={
            <SvgIcon fontSize="small">
              <EditIcon />
            </SvgIcon>
          }>
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
