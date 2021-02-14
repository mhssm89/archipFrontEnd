import React from 'react';

import { useRouter } from 'next/router';

// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/product-kinds/edit/Form';
// import { getProductKind } from 'src/graphql/queries';
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
  { title: 'Product Kinds' },
];

function ProductKindEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [productKind, setProductKind] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const productKindId = router.query['productKindId'];

  React.useEffect(() => {
    fetchProductKind();
  }, [productKindId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Product Kind - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Product Kind" />
          </Container>

          <Box mt={3}>
            <Container maxWidth="lg">
              <Form productKind={productKind} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchProductKind() {
    try {
      // Return if not productKindId
      if (!productKindId) return;

      // Make an API request
      // const { data } = await API.graphql({
      //   query: getProductKind,
      //   variables: { id: router.query.productKindId },
      // });

      // setProductKind(data.getProductKind);
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

ProductKindEditPage.Guard = Protected;
ProductKindEditPage.Layout = DashboardLayout;

export default ProductKindEditPage;
