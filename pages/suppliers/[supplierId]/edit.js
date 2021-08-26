import React from 'react';

import { useRouter } from 'next/router';

// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/suppliers/edit/Form';
import DashboardLayout from 'src/layouts/DashboardLayout';
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
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Management', href: '#' },
  { title: 'suppliers', href: '/suppliers' },
  { title: 'Edit' },
];

function supplierEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [supplier, setSupplier] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const supplierId = router.query['supplierId'];
  React.useEffect(() => {
    fetchsupplier();
  }, [supplierId]);

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
              <Form supplier={supplier} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchsupplier() {
    try {
      // Return if not supplierId
      if (!supplierId) return;

      // Make an API request

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/suppliers/${supplierId}`,
      );
      setSupplier(res.data);
      // setSupplier();
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

supplierEditPage.Guard = Protected;
supplierEditPage.Layout = DashboardLayout;

export default supplierEditPage;
