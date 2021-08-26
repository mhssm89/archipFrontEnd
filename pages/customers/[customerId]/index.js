import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Details from 'src/components/pages/customers/customer/Details';
import Header from 'src/components/common/Header';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';
import { useRouter } from 'next/router';
import axios from 'axios';

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
  const router = useRouter();
  const [customer, setCustomer] = React.useState(null);

  const getCustomer = React.useCallback(async () => {
    try {
      // Get customerId
      const customerId = router.query;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/customers/${customerId.customerId}`,
      );
      setCustomer(res.data);

      if (isMountedRef.current) {
        setCustomer(res.data);
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
