import React from 'react';

import { useRouter } from 'next/router';

// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/customers/edit/Form';
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
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Management', href: '#' },
  { title: 'Customers', href: '/customers' },
  { title: 'Edit' },
];

const CUSTOMER = {
  firstName: 'Mohamed',
  lastName: 'Hossam',
  company: 'Freelance',
  position: 'Manager',
  email: 'mohamed@archip.com',
  mobilePhone: '01234567891',
  businessPhone1: '01234567891',
  businessPhone2: '01234567891',
  address: 'New Cairo',
};

function CustomerEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [customer, setCustomer] = React.useState(CUSTOMER);
  const [isLoading, setIsLoading] = React.useState(true);

  const customerId = router.query['customerId'];

  React.useEffect(() => {
    fetchCustomer();
  }, [customerId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Customers - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Customer" />
          </Container>

          <Box mt={3}>
            <Container maxWidth="lg">
              <Form customer={customer} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchCustomer() {
    try {
      // Return if not customerId
      if (!customerId) return;

      // Make an API request

      // setCustomer();
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

CustomerEditPage.Guard = Protected;
CustomerEditPage.Layout = DashboardLayout;

export default CustomerEditPage;
