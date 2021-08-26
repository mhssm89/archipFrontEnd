import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/products/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
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
  { title: 'Products' },
];

const PRODUCTS = [];

function ProductsPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [products, setProducts] = React.useState([]);

  const getProducts = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/products/?_where[isDeleted]=0`,
      );
      const data = res.data;
      if (isMountedRef.current) {
        setProducts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Page className={classes.root} title="Products - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Products"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/products/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Product
            </Button>
          }
        />

        <Box mt={3}>
          <Results query={products} setquery={setProducts} />
        </Box>
      </Container>
    </Page>
  );
}

ProductsPage.Guard = Protected;
ProductsPage.Layout = DashboardLayout;

export default ProductsPage;
