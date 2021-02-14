import React from 'react';

import {
  Avatar,
  Card,
  CardHeader,
  colors,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import numeral from 'numeral';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const REFERRALS = [
  {
    color: colors.blueGrey['700'],
    initials: 'GT',
    name: 'GitHub',
    value: 53032,
  },
  {
    color: colors.cyan['500'],
    initials: 'TW',
    name: 'Twitter',
    value: 39551,
  },
  {
    color: colors.indigo[600],
    initials: 'HN',
    name: 'Hacker News',
    value: 23150,
  },
  {
    color: colors.red['500'],
    initials: 'SO',
    name: 'Stack Overflow',
    value: 14093,
  },
  {
    color: colors.orange['900'],
    initials: 'RD',
    name: 'Reddit.com',
    value: 7251,
  },
  {
    color: colors.blueGrey['900'],
    initials: 'DE',
    name: 'Dev.to',
    value: 5694,
  },
  {
    color: colors.blue['900'],
    initials: 'FB',
    name: 'Facebook',
    value: 3643,
  },
  {
    color: colors.blueGrey['900'],
    initials: 'MD',
    name: 'Medium',
    value: 1654,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
  },
}));

function TopReferrals({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = React.useState([]);

  const getReferrals = React.useCallback(async () => {
    try {
      const data = { referrals: REFERRALS };

      if (isMountedRef.current) {
        setReferrals(data.referrals);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Top Referrals" />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem divider={i < referrals.length - 1} key={referral.name}>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: referral.color }}>
                {referral.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography variant="body2" color="textSecondary">
              {numeral(referral.value).format('0,0')}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default TopReferrals;
