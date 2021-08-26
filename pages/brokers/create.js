import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/brokers/create/Form';
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
  { title: 'Brokers', href: '/brokers' },
  { title: 'Create' },
];

function BrokerCreatePage() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Brokers - Create">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Create Broker" />
      </Container>

      <Box mt={3}>
        <Container maxWidth="lg">
          <Form />
        </Container>
      </Box>
    </Page>
  );
}

BrokerCreatePage.Guard = Protected;
BrokerCreatePage.Layout = DashboardLayout;

export default BrokerCreatePage;
