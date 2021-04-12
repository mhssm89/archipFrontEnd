import React from 'react';

import { useRouter } from 'next/router';

import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/poqs/edit/Form';
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
  { title: 'Quotations', href: '/poqs' },
  { title: 'Edit' },
];

const POQ = {
  number: 123456,
  customerName: 'Mohamed Hossam',
  startDate: new Date(),
  endDate: new Date(),
  shippingAddress: 'New Cairo',
  shippingCost: 100,
  otherCosts: 100,
  totalCost: 1000,
  products: [
    {
      id: 1,
      partNo: '123456',
      quantity: 15,
      price: '100',
      discount: '5',
    },
    {
      id: 2,
      partNo: '789101',
      quantity: 20,
      price: '30',
      discount: '10',
    },
    {
      id: 3,
      partNo: '65489',
      quantity: 100,
      price: '12',
      discount: '3',
    },
  ],
};

function POQEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [poq, setPOQ] = React.useState(POQ);
  const [isLoading, setIsLoading] = React.useState(true);

  const poqId = router.query['poqId'];

  React.useEffect(() => {
    fetchPOQ();
  }, [poqId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Quotations - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Quotation" />

            <Box mt={3}>
              <Form poq={poq} />
            </Box>
          </Container>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchPOQ() {
    try {
      // Return if not poqId
      if (!poqId) return;

      // Make an API request

      // setPOQ();
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

POQEditPage.Guard = Protected;
POQEditPage.Layout = DashboardLayout;

export default POQEditPage;
