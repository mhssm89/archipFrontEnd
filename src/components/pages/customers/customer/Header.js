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

function Header({ className, customer, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
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
            Customers
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          {customer.name}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          href="/customers/1/edit"
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
