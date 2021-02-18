import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/products/upload/Form';
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
  { title: 'Products', href: '/products' },
  { title: 'Upload' },
];

function ProductsUploadPage() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Products - Upload">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Upload Products" />

        <Box mt={3}>
          <Form />
        </Box>
      </Container>
    </Page>
  );
}

ProductsUploadPage.Guard = Protected;
ProductsUploadPage.Layout = DashboardLayout;

export default ProductsUploadPage;
