import { Container, Grid, makeStyles } from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/dashboard/Header';
import LatestProjects from 'src/components/pages/dashboard/LatestProjects';
import NewProjects from 'src/components/pages/dashboard/NewProjects';
import PerformanceOverTime from 'src/components/pages/dashboard/PerformanceOverTime';
import RealTime from 'src/components/pages/dashboard/RealTime';
import RoiPerCustomer from 'src/components/pages/dashboard/RoiPerCustomer';
import SystemHealth from 'src/components/pages/dashboard/SystemHealth';
import TeamTasks from 'src/components/pages/dashboard/TeamTasks';
import TodaysMoney from 'src/components/pages/dashboard/TodaysMoney';
import DashboardLayout from 'src/layouts/DashboardLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function DashboardPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <TodaysMoney />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <NewProjects />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <SystemHealth />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <RoiPerCustomer />
          </Grid>
          <Grid item lg={3} xs={12}>
            <RealTime />
          </Grid>
          <Grid item lg={9} xs={12}>
            <PerformanceOverTime />
          </Grid>
          <Grid item lg={5} xl={4} xs={12}>
            <TeamTasks />
          </Grid>
          <Grid item lg={7} xl={8} xs={12}>
            <LatestProjects />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

DashboardPage.Guard = Protected;
DashboardPage.Layout = DashboardLayout;

export default DashboardPage;
