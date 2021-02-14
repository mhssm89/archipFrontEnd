import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
  deleteAction: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

function OtherActions({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Button startIcon={<NotInterestedIcon />}>Close Account</Button>
          <Button startIcon={<GetAppIcon />}>Export Data</Button>
        </Box>
        <Box mt={1} mb={2}>
          <Typography variant="body2" color="textSecondary">
            Remove this customer’s data if he requested that, if not please be
            aware that what has been deleted can never brough back
          </Typography>
        </Box>
        <Button className={classes.deleteAction} startIcon={<DeleteIcon />}>
          Delete Account
        </Button>
      </CardContent>
    </Card>
  );
}

export default OtherActions;
