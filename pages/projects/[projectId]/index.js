import React from 'react';

import {
  Box,
  Container,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/common/Header';
import Notifications from 'src/components/pages/projects/view/Notifications';
import Projects from 'src/components/pages/projects/view/Projects';
import Statistics from 'src/components/pages/projects/view/Statistics';
import DashboardLayout from 'src/layouts/DashboardLayout';
import Projectinfo from 'src/components/pages/projects/view/ProjectInfo';
import ProductResult from 'src/components/pages/projects/view/ProductResult'
import clsx from 'clsx';
import IncomeResult from 'src/components/pages/projects/view/IncomeResult';
import OutcomeResult from 'src/components/pages/projects/view/OutcomeResult';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const headerLinks = [
  { title: 'Management', href: '#' },
  { title: 'Projects', href: '/projects' },
  { title: 'View' },
];
function ProjectView({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Overview">
      <Container>
        <Header links={headerLinks} mainText="view Project" />
        <Box mt={3}>
          <Statistics />
        </Box>
        <Grid
          className={clsx(classes.root, className)}
          container
          spacing={3}
          {...rest}>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Box mt={1}>
              <Projectinfo />
            </Box>
          </Grid>
          <Grid item lg={8} md={6} xl={9} xs={12}>
            <Box mt={1}>
              <ProductResult />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Box mt={1}>
              <Typography variant="h4">Payment Info.</Typography>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <IncomeResult />
          </Grid>
          <Grid item md={6} xs={12}>
            <OutcomeResult />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
ProjectView.Guard = Protected;
ProjectView.Layout = DashboardLayout;

export default ProjectView;
