import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { Edit as EditIcon, Send as SendIcon } from 'react-feather';
import Header from 'src/components/common/Header';
import LoadingScreen from 'src/components/common/LoadingScreen';
import Page from 'src/components/common/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Protected from 'src/components/common/Protected';
import Details from 'src/components/pages/poqs/view/Details';
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
  { title: 'Quotations', href: '/poqs' },
  { title: 'Details' },
];
function POQViewPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const router = useRouter();
  const [all, setAll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const poqId = router.query['poqId'];

  React.useEffect(() => {
    if (poqId) {
      getPoq();
    }
  }, [poqId]);

  async function getPoq() {
    try {
      const poq = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/poqs/${poqId}`,
      );
      if (poq.status === 200) {
        const poqdetail = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/poqdetails?_where[poq]={poq.data.id}`,
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

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Page className={classes.root} title="Quotations - Details">
          <Container maxWidth={false}>
            <Header
              links={headerLinks}
              mainText="Quotation Details"
              rightComponent={
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => router.push(`/poqs/${poqId}/edit`)}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <EditIcon />
                    </SvgIcon>
                  }>
                  Edit
                </Button>
              }
            />

            <Box mt={3}>
              <Details poq={all} />
            </Box>
          </Container>
        </Page>
      )}
    </>
  );
  // ##################################################
}

POQViewPage.Guard = Protected;
POQViewPage.Layout = DashboardLayout;

export default POQViewPage;
