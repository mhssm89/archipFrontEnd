import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import getInitials from 'src/utils/getInitials';

const CUSTOMER_ACTIVITY = [
  {
    id: '5e89140bcc768199d1e0dc49',
    createdAt: moment().subtract(23, 'minutes').toDate().getTime(),
    customer: {
      id: '5e887a62195cc5aef7e8ca5d',
      avatar: '/static/images/avatars/avatar_2.png',
      name: 'Ekaterina Tankova',
    },
    description: 'Created account',
    type: 'register',
  },
  {
    id: '5e891411b0290b175166cd32',
    createdAt: moment().subtract(56, 'minutes').toDate().getTime(),
    customer: {
      id: '5e887ac47eed253091be10cb',
      name: 'Cao Yu',
      avatar: '/static/images/avatars/avatar_3.png',
    },
    description: 'Subscription Purchase',
    type: 'payment',
  },
  {
    id: '5e89141633dc5e52c923ef27',
    createdAt: moment().subtract(2, 'hours').toDate().getTime(),
    customer: {
      id: '5e887b209c28ac3dd97f6db5',
      name: 'Alex Richardson',
      avatar: '/static/images/avatars/avatar_4.png',
    },
    description: 'Submitted a ticket',
    type: 'ticket_create',
  },
  {
    id: '5e89141bd975c7f33aee9f4b',
    createdAt: moment().subtract(5, 'minutes').toDate().getTime(),
    customer: {
      id: '5e887b7602bdbc4dbb234b27',
      name: 'Anje Keizer',
      avatar: '/static/images/avatars/avatar_5.png',
    },
    description: 'Subscription Purchase',
    type: 'payment',
  },
  {
    id: '5e891421d7945778863cf9ca',
    createdAt: moment().subtract(5, 'minutes').toDate().getTime(),
    customer: {
      id: '5e86809283e28b96d2d38537',
      name: 'Katarina Smith',
      avatar: '/static/images/avatars/avatar_6.png',
    },
    description: 'Subscription Purchase',
    type: 'payment',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
}));

function CustomerActivity({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [activities, setActivities] = React.useState([]);

  const getActivities = React.useCallback(async () => {
    try {
      const data = { activities: CUSTOMER_ACTIVITY };

      if (isMountedRef.current) {
        setActivities(data.activities);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getActivities();
  }, [getActivities]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer Activity" action={<GenericMoreButton />} />
      <Divider />
      <Box display="flex">
        <div className={classes.item}>
          <Typography align="center" variant="h3" color="textPrimary">
            15,245
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Registered
          </Typography>
        </div>
        <Divider />
        <div className={classes.item}>
          <Typography align="center" variant="h3" color="textPrimary">
            357
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Online
          </Typography>
        </div>
      </Box>
      <Divider />
      <List disablePadding>
        {activities.map((activity, i) => (
          <ListItem divider={i < activities.length - 1} key={activity.id}>
            <ListItemAvatar>
              <Avatar
                alt="Customer"
                component={Link}
                src={activity.customer.avatar}
                href="#">
                {getInitials(activity.customer.name)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  color="textPrimary"
                  component={Link}
                  href="#"
                  underline="none"
                  variant="h6">
                  {activity.customer.name}
                </Link>
              }
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {activity.description}
                </Typography>
              }
            />
            <Typography color="textSecondary" noWrap variant="caption">
              {moment(activity.createdAt).fromNow()}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default CustomerActivity;
