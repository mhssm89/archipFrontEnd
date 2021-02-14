import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Container, makeStyles, SvgIcon } from '@material-ui/core';

import { PlusCircle as PlusCircleIcon } from 'react-feather';

import Header from 'src/components/common/Header';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Results from 'src/components/pages/product-classes/Results';
import { listProductClasss } from 'src/graphql/queries';
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
  { title: 'Dashboard', href: '/' },
  { title: 'Basic Data', href: '/' },
  { title: 'Product Classes' },
];

function ProductClassesPage() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Page className={classes.root} title="Product Classes - List">
      <Container maxWidth={false}>
        <Header
          links={headerLinks}
          mainText="All Product Classes"
          rightComponent={
            <Button
              color="secondary"
              variant="contained"
              onClick={() => router.push('/product-classes/create')}
              className={classes.action}
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusCircleIcon />
                </SvgIcon>
              }>
              New Product Class
            </Button>
          }
        />

        <Box mt={3}>
          <Results query={listProductClasss} queryName="listProductClasss" />
        </Box>
      </Container>
    </Page>
  );
}

ProductClassesPage.Guard = Protected;
ProductClassesPage.Layout = DashboardLayout;

export default ProductClassesPage;
