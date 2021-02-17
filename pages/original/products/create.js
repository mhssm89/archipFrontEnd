import React from 'react';

import { Button, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Link from 'src/components/common/Link';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/products/create/Form';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100,
  },
}));

const headerLinks = [
  { title: 'Dashboard', href: '/' },
  { title: 'Basic Data', href: '/' },
  { title: 'Product' },
];

function ProductCreatePage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Product Create">
      <Container maxWidth="lg">
        <Header
          links={headerLinks}
          mainText="Create Product"
          rightComponent={
            <Button component={Link} href="/products">
              Cancel
            </Button>
          }
        />

        <Form />
      </Container>
    </Page>
  );
}

ProductCreatePage.Guard = Protected;
ProductCreatePage.Layout = DashboardLayout;

export default ProductCreatePage;
