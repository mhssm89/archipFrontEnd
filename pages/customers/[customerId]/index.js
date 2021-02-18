import React from 'react';

import {
  Box,
  Container,
  makeStyles,
} 
from '@material-ui/core';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Details from 'src/components/pages/customers/customer/Details';
import Header from 'src/components/common/Header';
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

const headerLinks = [
    { title: 'Management', href: '#' },
    { title: 'Customers', href: '/customers' },
    { title: 'View' },
  ];

function CustomerViewPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  // const router = useRouter();
  const [customer, setCustomer] = React.useState(null);

  const getCustomer = React.useCallback(async () => {
    try {
      // Get customerId
      // const { customerId } = router.query;

      const data = {
        customer: {
          id: '5e86805e2bafd54f66cc95c3',
          address1: 'Street John Wick, no. 7',
          address2: 'House #25',
          balance: 0,
          city: 'San Diego',
          country: 'USA',
          creditCard: '**** **** **** **** 4142',
          currency: '$',
          email: 'adam.denisov@devias.io',
          hasDiscountedPrices: false,
          isVerified: true,
          name: 'Adam Denisov',
          phone: '+55 748 327 439',
          state: 'New York',
          vatRate: 19,
          zipCode: '240355',
        },
      };

      if (isMountedRef.current) {
        setCustomer(data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page className={classes.root} title="Customer Details">
      <Container maxWidth={false}>
      <Header links={headerLinks} mainText="View Customer" />
        <Box mt={3}>
           <Details customer={customer} />
        </Box>
      </Container>
    </Page>
  );
}

CustomerViewPage.Guard = Protected;
CustomerViewPage.Layout = DashboardLayout;

export default CustomerViewPage;
