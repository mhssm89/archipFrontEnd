import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/suppliers/Results';
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
  { title: 'suppliers' },
];

const CUSTOMERS = [];

function SuppliersPage() {
  const classes = useStyles();
  const router = useRouter();
  const isMountedRef = useIsMountedRef();
  const [suppliers, setSuppliers] = React.useState([]);

  const getCustomers = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/suppliers/?_where[isDeleted]=0`,
      );
      const data = res.data;
      // const data = { suppliers: CUSTOMERS };
      if (isMountedRef.current) {
        setSuppliers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <Page className={classes.root} title="Suppliers - All">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Suppliers"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/suppliers/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Supplier
            </Button>
          }
        />

        <Box mt={3}>
          <Results query={suppliers} setquery={setSuppliers} />
        </Box>
      </Container>
    </Page>
  );
}

SuppliersPage.Guard = Protected;
SuppliersPage.Layout = DashboardLayout;

export default SuppliersPage;
