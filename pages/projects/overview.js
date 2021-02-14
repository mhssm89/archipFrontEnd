import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/projects/overview/Header';
import Notifications from 'src/components/pages/projects/overview/Notifications';
import Projects from 'src/components/pages/projects/overview/Projects';
import Statistics from 'src/components/pages/projects/overview/Statistics';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function ProjectOverviewPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Overview">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Statistics />
        </Box>
        <Box mt={6}>
          <Notifications />
        </Box>
        <Box mt={6}>
          <Projects />
        </Box>
      </Container>
    </Page>
  );
}

ProjectOverviewPage.Guard = Protected;
ProjectOverviewPage.Layout = DashboardLayout;

export default ProjectOverviewPage;
