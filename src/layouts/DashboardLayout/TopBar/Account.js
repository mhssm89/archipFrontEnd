import React, { useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { useApolloClient } from '@apollo/client';

import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Link from 'src/components/common/Link';
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const Account = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const router = useRouter();
  const ref = useRef(null);
  const { user, logout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      client.clearStore();
      await logout(() => router.push('/login'));
    } catch (err) {
      console.error('error signing out: ', err);
      enqueueSnackbar('Unable to logout', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}>
        <Avatar alt="User" className={classes.avatar} />
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            {`${user?.name}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}>
        <MenuItem component={Link} href="/account">
          Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Account;
