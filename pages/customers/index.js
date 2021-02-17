import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/customers/Results';
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
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Management', href: '#' },
  { title: 'Customers' },
];

const CUSTOMERS = [];

function CustomersPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [customers, setCustomers] = React.useState([]);

  const getCustomers = React.useCallback(async () => {
    try {
      const data = { customers: CUSTOMERS };

      if (isMountedRef.current) {
        setCustomers(data.customers);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <Page className={classes.root} title="Customers - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Customers"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/customers/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Customer
            </Button>
          }
        />

        <Box mt={3}>
          <Results query="" />
        </Box>
      </Container>
    </Page>
  );
}

CustomersPage.Guard = Protected;
CustomersPage.Layout = DashboardLayout;

export default CustomersPage;
