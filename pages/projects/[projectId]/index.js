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
import Statistics from 'src/components/pages/projects/view/Statistics';
import DashboardLayout from 'src/layouts/DashboardLayout';
import Projectinfo from 'src/components/pages/projects/view/ProjectInfo';
import ProductResult from 'src/components/pages/projects/view/ProductResult';
import clsx from 'clsx';
import IncomeResult from 'src/components/pages/projects/view/IncomeResult';
import OutcomeResult from 'src/components/pages/projects/view/OutcomeResult';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import LoadingScreen from 'src/components/common/LoadingScreen';

import axios from 'axios';
import { useRouter } from 'next/router';
import { isMoment } from 'moment';

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
  const isMountedRef = useIsMountedRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [project, setProject] = React.useState([]);
  const [totalIncome, setTotalIncome] = React.useState([]);
  const [totalOutcome, setTotalOutcome] = React.useState([]);

  const projectId = router.query['projectId'];
  React.useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  async function fetchProject() {
    try {
      if (!projectId) return;
      const res = await axios.get(
        `http://localhost:1337/projects/${projectId}`,
      );

      if (res.status === 200) {
        const details = await axios.get(
          `http://localhost:1337/project-details?_where[project]=${res.data.id}`,
        );
        const projectdetail = details.data;
        setProject({ project: res.data, projectdetail: projectdetail });
        setIsLoading(false);
      }
    } catch (err) {
      enqueueSnackbar(`error ${err}`, { variant: 'error' });
    }
  }

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Page className={classes.root} title="Overview">
      <Container>
        <Header links={headerLinks} mainText="view Project" />
        <Box mt={3}>
          <Statistics
            total={project.project['grandTotal']}
            totalincome={totalIncome}
            totaloutcome={totalOutcome}
          />
        </Box>
        <Grid
          className={clsx(classes.root, className)}
          container
          spacing={3}
          {...rest}>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Box mt={1}>
              <Projectinfo project={project.project} />
            </Box>
          </Grid>
          <Grid item lg={8} md={6} xl={9} xs={12}>
            <Box mt={1}>
              <ProductResult query={project['projectdetail']} />
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
            <IncomeResult settotalincome={setTotalIncome} />
          </Grid>
          <Grid item md={6} xs={12}>
            <OutcomeResult setotalutcome={setTotalOutcome} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
ProjectView.Guard = Protected;
ProjectView.Layout = DashboardLayout;

export default ProjectView;
