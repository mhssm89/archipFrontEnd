import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';
import { PlusCircle as PlusCircleIcon } from 'react-feather';
import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/brokers/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';
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
  { title: 'Brokers' },
];

function BrokerPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [brokers, setBrokers] = React.useState([]);

  const getBrokers = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/brokers?_where[isDeleted]=0`,
      );
      const data = res.data;
      if (isMountedRef.current) {
        setBrokers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getBrokers();
  }, []);
  return (
    <Page className={classes.root} title="Broker - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Brokers"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/brokers/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Broker
            </Button>
          }
        />

        <Box mt={3}>
          <Results query={brokers} setquery={setBrokers} />
        </Box>
      </Container>
    </Page>
  );
}

BrokerPage.Guard = Protected;
BrokerPage.Layout = DashboardLayout;

export default BrokerPage;
