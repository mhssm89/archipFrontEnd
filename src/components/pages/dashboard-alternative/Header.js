import React from 'react';

import {
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import { Calendar as CalendarIcon } from 'react-feather';

import Link from 'src/components/common/Link';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const actionRef = React.useRef(null);

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
            Main Dashboard
          </Link>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Arch-ip Overview
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
