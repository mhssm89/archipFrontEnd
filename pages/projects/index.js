import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/projects/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
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
  { title: 'Projects' },
];

const PROJECTS = [];

function ProjectsPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = React.useState([]);

  const getProjects = React.useCallback(async () => {
    try {
      const data = { projects: PROJECTS };

      if (isMountedRef.current) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Page className={classes.root} title="Projects - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Projects"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/projects/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Project
            </Button>
          }
        />

        <Box mt={3}>
          <Results query="" />
        </Box>
      </Container>
    </Page>
  );
}

ProjectsPage.Guard = Protected;
ProjectsPage.Layout = DashboardLayout;

export default ProjectsPage;
