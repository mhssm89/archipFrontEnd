import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Form from 'src/components/pages/poqs/edit/Form';
import DashboardLayout from 'src/layouts/DashboardLayout';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
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
  { title: 'Quotations', href: '/poqs' },
  { title: 'Edit' },
];

function POQEditPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [isLoading, setIsLoading] = React.useState(true);
  const [all, setAll] = React.useState({});
  const poqId = router.query['poqId'];
  React.useEffect(() => {
    if (poqId) {
      fetchPOQ();
    }
  }, [poqId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Quotations - Edit">
          <Container maxWidth={false}>
            <Header links={headerLinks} mainText="Edit Quotation" />

            <Box mt={3}>
              <Form poq={all} setPOQ={setAll} />
            </Box>
          </Container>
        </Page>
      )}
    </>
  );
  async function fetchPOQ() {
    try {
      if (!poqId) return;
      const poq = await axios.get('http://localhost:1337/poqs/' + poqId);
      if (poq.status === 200) {
        const poqdetail = await axios.get(
          'http://localhost:1337/poqdetails?_where[poq]=' + poq.data.id,
        );
        const details = poqdetail.data;
        setAll({ poq: poq.data, poqDetail: details });
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      enqueueSnackbar('error in loading Qutaion', { variant: 'error' });
    }
  }
}

POQEditPage.Guard = Protected;
POQEditPage.Layout = DashboardLayout;

export default POQEditPage;
