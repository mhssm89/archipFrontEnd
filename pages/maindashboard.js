import React from 'react';

import { Container, Grid, makeStyles } from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import CustomerActivity from 'src/components/pages/dashboard-alternative/CustomerActivity';
import EarningsSegmentation from 'src/components/pages/dashboard-alternative/EarningsSegmentation';
import FinancialStats from 'src/components/pages/dashboard-alternative/FinancialStats';
import Header from 'src/components/pages/dashboard-alternative/Header';
import LatestOrders from 'src/components/pages/dashboard-alternative/LatestOrders';
import MostProfitableProducts from 'src/components/pages/dashboard-alternative/MostProfitableProducts';
import Overview from 'src/components/pages/dashboard-alternative/Overview';
import TopReferrals from 'src/components/pages/dashboard-alternative/TopReferrals';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function MainDashBoardPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Main Dashboard">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Overview />
          </Grid>
          <Grid item lg={8} xl={9} xs={12}>
            <FinancialStats />
          </Grid>
          <Grid item lg={4} xl={3} xs={12}>
            <EarningsSegmentation />
          </Grid>
          <Grid item xs={12}>
            <LatestOrders />
          </Grid>
          {/* <Grid item lg={4} xs={12}>
            <CustomerActivity />
          </Grid> */}
          <Grid item xs={12}>
            <MostProfitableProducts />
          </Grid>
          {/* <Grid item lg={4} xs={12}>
            <TopReferrals />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}

MainDashBoardPage.Guard = Protected;
MainDashBoardPage.Layout = DashboardLayout;

export default MainDashBoardPage;
