import React from 'react';
import { makeStyles } from '@material-ui/core';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import DashboardLayout from 'src/layouts/DashboardLayout';

function ProjectsnewPage() {
  return (
    <Page>
      <h1>List all projects here </h1>
    </Page>
  );
}
ProjectsnewPage.Guard = Protected;
ProjectsnewPage.Layout = DashboardLayout;

export default ProjectsnewPage;
