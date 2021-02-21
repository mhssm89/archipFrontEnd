import React from 'react';

import { useRouter } from 'next/router';

import { Box, Container, makeStyles } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/projects/edit/Form';
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
  { title: 'Management', href: '#' },
  { title: 'Proojects', href: '/projects' },
  { title: 'Edit' },
];

const PROJECT = [
  {
    id: 1,
    projectName: 'Project 1',
    customerName: 'Mohamed Hossam',
    status: 'negotiation',
    startDate: '01-01-2021',
    endDate: '01-01-2021',
    shippingAddress: '',
    poqNumber: '255',
  },
  {
    id: 1,
    projectName: 'Project 2',
    customerName: 'Mohamed Hossam',
    status: 'signed',
    startDate: '01-01-2021',
    endDate: '01-01-2021',
    shippingAddress: '',
    poqNumber: '255',
  },
  {
    id: 1,
    projectName: 'Project 3',
    customerName: 'Mohamed Hossam',
    status: 'inprogress',
    startDate: '01-01-2021',
    endDate: '01-01-2021',
    shippingAddress: '',
    poqNumber: '255',
  },
  {
    id: 1,
    projectName: 'Project 4',
    customerName: 'Mohamed Hossam',
    status: 'finished',
    startDate: '01-01-2021',
    endDate: '01-01-2021',
    shippingAddress: '',
    poqNumber: '255',
  },
];

function ProjectInfoForm() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [project, setProject] = React.useState(PROJECT);
  const [isLoading, setIsLoading] = React.useState(true);

  const projectId = router.query['projectId'];

  React.useEffect(() => {
    fetchPOQ();
  }, [projectId]);

  return <>{isLoading ? <LoadingScreen /> : <Form project={project} />}</>;
  // ##################################################
  async function fetchPOQ() {
    try {
      // Return if not projectId
      if (!projectId) return;

      // Make an API request

      // setProject();
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

export default ProjectInfoForm;
