import React from 'react';

import { Breadcrumbs, makeStyles, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';

import Link from 'src/components/common/Link';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
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
        Edit Customer
      </Typography>
    </div>
  );
}

export default Header;
