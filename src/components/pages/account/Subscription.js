import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';

import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  overview: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
    },
  },
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48,
  },
  details: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));

function Subscription({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [subscription, setSubscription] = React.useState(null);

  const getSubscription = React.useCallback(async () => {
    try {
      const data = {
        subscription: {
          name: 'Premium',
          price: 29,
          currency: '$',
          proposalsLeft: 12,
          templatesLeft: 5,
          invitesLeft: 24,
          adsLeft: 10,
          hasAnalytics: true,
          hasEmailAlerts: true,
        },
      };

      if (isMountedRef.current) {
        setSubscription(data.subscription);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getSubscription();
  }, [getSubscription]);

  if (!subscription) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Manage your subscription" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.overview}>
            <div>
              <Typography display="inline" variant="h4" color="textPrimary">
                {subscription.currency}
                {subscription.price}
              </Typography>
              <Typography display="inline" variant="subtitle1">
                /mo
              </Typography>
            </div>
            <Box display="flex" alignItems="center">
              <img
                alt="Product"
                className={classes.productImage}
                src="/static/images/products/product_premium.svg"
              />
              <Typography variant="overline" color="textSecondary">
                {subscription.name}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.details}>
            <div>
              <Typography variant="body2" color="textPrimary">
                {`${subscription.proposalsLeft} proposals left`}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {`${subscription.templatesLeft} templates`}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textPrimary">
                {`${subscription.invitesLeft} invites left`}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {`${subscription.adsLeft} ads left`}
              </Typography>
            </div>
            <div>
              {subscription.hasAnalytics && (
                <Typography variant="body2" color="textPrimary">
                  Analytics dashboard
                </Typography>
              )}
              {subscription.hasEmailAlerts && (
                <Typography variant="body2" color="textPrimary">
                  Email alerts
                </Typography>
              )}
            </div>
          </Box>
        </Paper>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button size="small" color="secondary" variant="contained">
            Upgrade plan
          </Button>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            The refunds don&apos;t work once you have the subscription, but you
            can always{' '}
            <Link color="secondary" component={Link} href="/">
              Cancel your subscription
            </Link>
            .
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Subscription;
