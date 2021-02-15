import React from 'react';

import {
  Box,
  Container,
  Divider,
  makeStyles,
  Tab,
  Tabs,
} from '@material-ui/core';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import General from 'src/components/pages/account/General';
import Security from 'src/components/pages/account/Security';
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
  { title: 'Account' },
];

function AccountPage() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState('general');

  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'security', label: 'Security' },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Header links={headerLinks} mainText="Settings" />

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
          {currentTab === 'general' && <General />}
          {currentTab === 'security' && <Security />}
        </Box>
      </Container>
    </Page>
  );
}

AccountPage.Guard = Protected;
AccountPage.Layout = DashboardLayout;

export default AccountPage;
