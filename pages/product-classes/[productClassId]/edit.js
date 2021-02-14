import React from 'react';

import { useRouter } from 'next/router';

// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/product-classes/edit/Form';
// import { getProductClass } from 'src/graphql/queries';
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
  { title: 'Dashboard', href: '/' },
  { title: 'Basic Data', href: '/' },
  { title: 'Product Classes' },
];

function ProductClassEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [productClass, setProductClass] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const productClassId = router.query['productClassId'];

  React.useEffect(() => {
    fetchProductClass();
  }, [productClassId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Product Class - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Product Class" />
          </Container>

          <Box mt={3}>
            <Container maxWidth="lg">
              <Form productClass={productClass} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchProductClass() {
    try {
      // Return if not productClassId
      if (!productClassId) return;

      // Make an API request
      // const { data } = await API.graphql({
      //   query: getProductClass,
      //   variables: { id: router.query.productClassId },
      // });

      // setProductClass(data.getProductClass);
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

ProductClassEditPage.Guard = Protected;
ProductClassEditPage.Layout = DashboardLayout;

export default ProductClassEditPage;
