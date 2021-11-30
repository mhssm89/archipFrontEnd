import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/sgas/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';
import CreateSGA from 'src/components/pages/sgas/create.js';
import axios from 'axios';

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
  { title: 'Selling, General, and Administrative Expense (SG&A) ' },
];

const CUSTOMERS = [];

function SGAsPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [SGAs, setSGAs] = React.useState([]);

  const getSGAs = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/transactions/?_where[logestic]=1`,
      );
      const data = res.data;
      // const data = { SGAs: CUSTOMERS };
      if (isMountedRef.current) {
        setSGAs(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getSGAs();
  }, [getSGAs]);

  return (
    <Page className={classes.root} title="SGAs">
      <Container maxWidth={false}>
        <Header links={headerLinks} mainText="SG & A" />

        <Box mt={3}>
          <CreateSGA setSGAs={setSGAs} SGAs={SGAs} />
        </Box>

        <Box mt={3}>
          <Results query={SGAs} setquery={setSGAs} />
        </Box>
      </Container>
    </Page>
  );
}

SGAsPage.Guard = Protected;
SGAsPage.Layout = DashboardLayout;

export default SGAsPage;
