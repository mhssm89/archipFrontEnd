import React from 'react';

// import { useRouter } from 'next/router';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/orders/order/Header';
import OrderInfo from 'src/components/pages/orders/order/OrderInfo';
import OrderItems from 'src/components/pages/orders/order/OrderItems';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function OrderDetailsPage() {
  const classes = useStyles();
  // const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [order, setOrder] = React.useState(null);

  const getOrder = React.useCallback(async () => {
    try {
      // Get orderId
      // const { orderId } = router.query;
      const data = {
        order: {
          id: '5ecb8a6879877087d4aa2690',
          coupon: null,
          createdAt: moment().toDate().getTime(),
          currency: '$',
          customer: {
            address1: 'Street John Wick, no. 7',
            address2: 'House #25',
            city: 'San Diego',
            country: 'USA',
            name: 'Adam Denisov',
          },
          items: [
            {
              id: '5ecb8abbdd6dfb1f9d6bf98b',
              billingCycle: 'monthly',
              currency: '$',
              name: 'Project Points',
              quantity: 25,
              unitAmount: 50.25,
            },
            {
              id: '5ecb8ac10f116d04bed990eb',
              billingCycle: 'monthly',
              currency: '$',
              name: 'Freelancer Subscription',
              quantity: 1,
              unitAmount: 5.0,
            },
          ],
          number: 'DEV-103',
          paymentMethod: 'CreditCard',
          status: 'pending',
          totalAmount: 500.0,
        },
      };

      if (isMountedRef.current) {
        setOrder(data.order);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getOrder();
  }, [getOrder]);

  if (!order) {
    return null;
  }

  return (
    <Page className={classes.root} title="Order Details">
      <Container maxWidth={false}>
        <Header />
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item md={4} xl={3} xs={12}>
              <OrderInfo order={order} />
            </Grid>
            <Grid item md={8} xl={9} xs={12}>
              <OrderItems orderItems={order.items} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}

OrderDetailsPage.Guard = Protected;
OrderDetailsPage.Layout = DashboardLayout;

export default OrderDetailsPage;
