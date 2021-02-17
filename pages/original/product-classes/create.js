import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/product-classes/create/Form';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  header: {},
}));

const headerLinks = [
  { title: 'Dashboard', href: '/' },
  { title: 'Basic Data', href: '/' },
  { title: 'Product Classes' },
];

function ProductClassCreatePage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Product Class - Create">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Create Product Class" />
      </Container>

      <Box mt={3}>
        <Container maxWidth="lg">
          <Form />
        </Container>
      </Box>
    </Page>
  );
}

ProductClassCreatePage.Guard = Protected;
ProductClassCreatePage.Layout = DashboardLayout;

export default ProductClassCreatePage;
