import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Tab,
  Tabs,
  Divider,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import axios from 'axios';

import LoadingScreen from 'src/components/common/LoadingScreen';
import { useRouter } from 'next/router';
import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import DashboardLayout from 'src/layouts/DashboardLayout';
import Form from 'src/components/pages/projects/edit/Form';
import Invoices from 'src/components/pages/projects/edit/Invoices';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const headerLinks = [
  { title: 'Management', href: '#' },
  { title: 'Proojects', href: '/projects' },
  { title: 'Edit' },
];

// const PROJECT = {
//   id: 1,
//   projectName: 'Project 1',
//   customerName: 'Mohamed Hossam',
//   status: 'negotiation',
//   startDate: '01-01-2021',
//   endDate: '01-01-2021',
//   shippingAddress: '',
//   poqNumber: '255',
// };

function ProjectEditPage() {
  const classes = useStyles();
  const router = useRouter();
  const [project, setProject] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState('details');
  const { enqueueSnackbar } = useSnackbar();

  const projectId = router.query['projectId'];
  React.useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const tabs = [
    { value: 'details', label: 'Details' },
    { value: 'invoices', label: 'Invoices' },
  ];
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Projects - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Project" />
            <Box mt={3}>
              <Tabs
                onChange={handleTabsChange}
                scrollButtons="auto"
                value={currentTab}
                variant="scrollable"
                textColor="secondary">
                {tabs.map((tab) => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
            </Box>
            <Divider />
            <Box mt={3}>
              {currentTab === 'details' && (
                <Form project={project} setproject={setProject} />
              )}
              {currentTab === 'invoices' && <Invoices />}
            </Box>
          </Container>
        </Page>
      )}
    </>
  );

  async function fetchProject() {
    try {
      if (!projectId) return;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/projects/${projectId}`,
      );

      if (res.status === 200) {
        const details = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/project-details?_where[project]=${res.data.id}`,
        );
        const projectDetails = details.data;
        setProject({ project: res.data, projectdetail: projectDetails });
      }
    } catch (err) {
      enqueueSnackbar(`error ${err}`, { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

ProjectEditPage.Guard = Protected;
ProjectEditPage.Layout = DashboardLayout;

export default ProjectEditPage;
