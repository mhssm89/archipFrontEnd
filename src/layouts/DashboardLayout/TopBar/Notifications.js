import React, { useRef, useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Popover,
  SvgIcon,
  Tooltip,
  Typography,
} from '@material-ui/core';

import moment from 'moment';
import {
  Bell as BellIcon,
  MessageCircle as MessageIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
} from 'react-feather';

import Link from 'src/components/common/Link';

const NOTIFICATIONS = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    createdAt: moment().subtract(2, 'hours').toDate().getTime(),
    description: 'Dummy text',
    title: 'Your order is placed',
    type: 'order_placed',
  },
  {
    id: '5e8883f7ed1486d665d8be1e',
    createdAt: moment().subtract(1, 'day').toDate().getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message',
  },
  {
    id: '5e8883fca0e8612044248ecf',
    createdAt: moment().subtract(3, 'days').toDate().getTime(),
    description: 'Dummy text',
    title: 'Your item is shipped',
    type: 'item_shipped',
  },
  {
    id: '5e88840187f6b09b431bae68',
    createdAt: moment().subtract(7, 'days').toDate().getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message',
  },
];

const ICONS_MAP = {
  order_placed: PackageIcon,
  new_message: MessageIcon,
  item_shipped: TruckIcon,
};

const useStyles = makeStyles((theme) => ({
  popover: {
    width: 320,
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <BellIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}>
        <Box p={2}>
          <Typography variant="h5" color="textPrimary">
            Notifications
          </Typography>
        </Box>
        {NOTIFICATIONS.length === 0 ? (
          <Box p={2}>
            <Typography variant="h6" color="textPrimary">
              There are no notifications
            </Typography>
          </Box>
        ) : (
          <>
            <List disablePadding>
              {NOTIFICATIONS.map((notification) => {
                const Icon = ICONS_MAP[notification.type];

                return (
                  <ListItem
                    component={Link}
                    divider
                    key={notification.id}
                    href="#">
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>
                        <SvgIcon fontSize="small">
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        color: 'textPrimary',
                      }}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Box p={1} display="flex" justifyContent="center">
              <Button component={Link} size="small" href="#">
                Mark all as read
              </Button>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
};

export default Notifications;
