import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/suppliers/create/Form';
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
  { title: 'suppliers', href: '/suppliers' },
  { title: 'Create' },
];

function SuppliercreatePage() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="supplier - Create">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Create supplier" />
      </Container>

      <Box mt={3}>
        <Container maxWidth="lg">
          <Form />
        </Container>
      </Box>
    </Page>
  );
}

SuppliercreatePage.Guard = Protected;
SuppliercreatePage.Layout = DashboardLayout;

export default SuppliercreatePage;
