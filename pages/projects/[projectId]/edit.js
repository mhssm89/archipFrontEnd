import React from 'react';

import { Box, Container, makeStyles, Tab, Tabs, Divider } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import DashboardLayout from 'src/layouts/DashboardLayout';
import ProjectInfoForm from 'src/components/pages/projects/edit/ProjectInfoForm';
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

function ProjectEditPage() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState('details');
  const tabs = [
    { value: 'details', label: 'Details' },
    { value: 'invoices', label: 'Invoices' },
  ];
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
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
          {currentTab === 'details' && <ProjectInfoForm />}
          {currentTab === 'invoices' && <Invoices />}
        </Box>
      </Container>
    </Page>
  );
}

ProjectEditPage.Guard = Protected;
ProjectEditPage.Layout = DashboardLayout;

export default ProjectEditPage;
