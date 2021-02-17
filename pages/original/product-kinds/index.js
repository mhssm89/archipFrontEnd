import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/product-kinds/Results';
import { listProductKinds } from 'src/graphql/queries';
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

function ProductKindsPage() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Page className={classes.root} title="Product Kinds - List">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Product Kinds"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/product-kinds/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Product Kind
            </Button>
          }
        />

        <Box mt={3}>
          <Results query={listProductKinds} queryName="listProductKinds" />
        </Box>
      </Container>
    </Page>
  );
}

ProductKindsPage.Guard = Protected;
ProductKindsPage.Layout = DashboardLayout;

export default ProductKindsPage;
