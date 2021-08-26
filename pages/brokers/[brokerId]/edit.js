import React from 'react';
import { useRouter } from 'next/router';
// import { API } from 'aws-amplify';
import { Box, Container, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/brokers/edit/Form';
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
  { title: 'Management', href: '#' },
  { title: 'Brokers', href: '/brokers' },
  { title: 'Edit' },
];

function BrokerEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [broker, setBroker] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const brokerID = router.query['brokerId'];
  React.useEffect(() => {
    fetchBroker();
  }, [brokerID]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Brokers - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Broker" />
          </Container>
          <Box mt={3}>
            <Container maxWidth="lg">
              <Form broker={broker} />
            </Container>
          </Box>
        </Page>
      )}
    </>
  );
  // ##################################################
  async function fetchBroker() {
    try {
      // Make an API request
      const brokerId = router.query['brokerId'];
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/brokers/${brokerId}`,
      );
      setBroker(res.data);
    } catch (err) {
      enqueueSnackbar('Error has been occurred.', { variant: 'error' });
    } finally {
      // Finish
      setIsLoading(false);
    }
  }
}

BrokerEditPage.Guard = Protected;
BrokerEditPage.Layout = DashboardLayout;

export default BrokerEditPage;
