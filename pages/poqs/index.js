import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/poqs/Results';
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
  { title: 'POQs' },
];

const POQs = [];

function POQsPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [poqs, setPoqs] = React.useState([]);

  const getPoqs = React.useCallback(async () => {
    try {
      const data = { poqs: POQs };

      if (isMountedRef.current) {
        setPoqs(data.poqs);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getPoqs();
  }, [getPoqs]);

  return (
    <Page className={classes.root} title="POQs - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All POQs"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/poqs/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New POQ
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

POQsPage.Guard = Protected;
POQsPage.Layout = DashboardLayout;

export default POQsPage;
