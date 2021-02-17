import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/poqs/create/Form';
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
  { title: 'POQs', href: '/poqs' },
  { title: 'Create' },
];

function POQCreatePage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="POQs - Create">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="Create POQ" />

        <Box mt={3}>
          <Form />
        </Box>
      </Container>
    </Page>
  );
}

POQCreatePage.Guard = Protected;
POQCreatePage.Layout = DashboardLayout;

export default POQCreatePage;
