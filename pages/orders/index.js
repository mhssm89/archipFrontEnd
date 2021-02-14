import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/orders/Header';
import Results from 'src/components/pages/orders/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const ORDERS = [
  {
    id: '5ecb8a6d9f53bfae09e16115',
    createdAt: moment()
      .subtract(32, 'minutes')
      .subtract(23, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Cao Yu',
    },
    number: 'DEV-102',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a738aa6f3e577c2b3ec',
    createdAt: moment()
      .subtract(36, 'minutes')
      .subtract(51, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Alex Richardson',
    },
    number: 'DEV-101',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a795e53f134013eba3b',
    createdAt: moment()
      .subtract(38, 'minutes')
      .subtract(55, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Anje Keizer',
    },
    number: 'DEV-100',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a7f738cc572a9ce0277',
    createdAt: moment()
      .subtract(40, 'minutes')
      .subtract(3, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Clarke Gillebert',
    },
    number: 'DEV-99',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.0,
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    createdAt: moment()
      .subtract(45, 'minutes')
      .subtract(32, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Adam Denisov',
    },
    number: 'DEV-98',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a85a850c16fa413849c',
    createdAt: moment()
      .subtract(48, 'minutes')
      .subtract(57, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Miller Edwards',
    },
    status: 'pending',
    number: 'DEV-97',
    paymentMethod: 'CreditCard',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a8e69ba2e409ea0168f',
    createdAt: moment()
      .subtract(49, 'minutes')
      .subtract(4, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Emilee Simchenko',
    },
    number: 'DEV-96',
    paymentMethod: 'CreditCard',
    status: 'completed',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a9341c68839d387e1c4',
    createdAt: moment()
      .subtract(57, 'minutes')
      .subtract(43, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Elliott Stone',
    },
    number: 'DEV-95',
    paymentMethod: 'PayPal',
    status: 'rejected',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8a984bfbb97c9ae458e8',
    createdAt: moment()
      .subtract(59, 'minutes')
      .subtract(6, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Shen Zhi',
    },
    number: 'DEV-94',
    paymentMethod: 'CreditCard',
    status: 'canceled',
    totalAmount: 500.0,
  },
  {
    id: '5ecb8aa08d9127dba654ce7a',
    createdAt: moment()
      .subtract(1, 'hour')
      .subtract(15, 'minutes')
      .subtract(43, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      name: 'Merrile Burgett',
    },
    number: 'DEV-93',
    paymentMethod: 'PayPal',
    status: 'canceled',
    totalAmount: 500.0,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function OrdersPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [orders, setOrders] = React.useState([]);

  const getOrders = React.useCallback(async () => {
    try {
      const data = { orders: ORDERS };

      if (isMountedRef.current) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Page className={classes.root} title="Orders List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results orders={orders} />
        </Box>
      </Container>
    </Page>
  );
}

OrdersPage.Guard = Protected;
OrdersPage.Layout = DashboardLayout;

export default OrdersPage;
