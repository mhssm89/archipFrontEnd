import React from 'react';

import { useRouter } from 'next/router';

// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/products/edit/Form';
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
  { title: 'Products', href: '/products' },
  { title: 'Edit' },
];

const PRODUCT = {
  partNo: '123456789',
  brand: 1,
  name: 'Product 1',
  description: 'Product 1 Description',
  price: 100,
  discount: 10,
};

function ProductEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [product, setProduct] = React.useState(PRODUCT);
  const [isLoading, setIsLoading] = React.useState(true);

  const productId = router.query['productId'];

  React.useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Products - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Product" />
          </Container>

          <Box mt={3}>
            <Container maxWidth="lg">
              <Form product={product} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchProduct() {
    try {
      // Return if not productId
      if (!productId) return;
      const res = await axios.get(
        `http://localhost:1337/products/${productId}`,
      );
      setProduct(res.data);

      // Make an API request

      // setProduct();
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

ProductEditPage.Guard = Protected;
ProductEditPage.Layout = DashboardLayout;

export default ProductEditPage;
