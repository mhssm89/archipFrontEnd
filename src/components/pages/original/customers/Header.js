import React from 'react';

import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import {
  Download as DownloadIcon,
  PlusCircle as PlusCircleIcon,
  Upload as UploadIcon,
} from 'react-feather';

import Link from 'src/components/common/Link';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
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
            Customers
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          All Customers
        </Typography>
        <Box mt={2}>
          <Button
            startIcon={
              <SvgIcon fontSize="small">
                <UploadIcon />
              </SvgIcon>
            }>
            Import
          </Button>
          <Button
            startIcon={
              <SvgIcon fontSize="small">
                <DownloadIcon />
              </SvgIcon>
            }>
            Export
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          startIcon={
            <SvgIcon fontSize="small">
              <PlusCircleIcon />
            </SvgIcon>
          }>
          New Customer
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
