import React from 'react';

import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import NavigateNextIcon from '@material-ui/icons/NavigateNextOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import SendIcon from '@material-ui/icons/Send';

import clsx from 'clsx';

const notifications = [
  {
    id: '5e8883a4f7877f898c408c27',
    value: 6,
    type: 'invite',
    message: 'to send service quotes',
  },
  {
    id: '5e8883aa34190e0457a6e2b9',
    value: 2,
    type: 'message',
    message: 'from clients',
  },
  {
    id: '5e8883af168cad3e1f4fe0ae',
    value: 1,
    type: 'payout',
    message: 'that needs your confirmation',
  },
];

const getNotificationIcon = (notificationType) => {
  const iconsMap = {
    invite: <SendIcon />,
    message: <MailIcon />,
    payout: <PaymentIcon />,
  };

  return iconsMap[notificationType];
};

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function Notifications({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <List>
        {notifications.map((notification, i) => (
          <ListItem
            divider={i < notifications.length - 1}
            key={notification.id}>
            <ListItemIcon>
              {getNotificationIcon(notification.type)}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="textSecondary">
                <span className={classes.fontWeightMedium}>
                  {notification.value}
                </span>{' '}
                <span className={classes.fontWeightMedium}>
                  {notification.type}s
                </span>{' '}
                {notification.message}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title="View">
                <IconButton edge="end" size="small">
                  <NavigateNextIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Notifications;
