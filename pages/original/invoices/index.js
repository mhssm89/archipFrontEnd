import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/invoices/Header';
import Results from 'src/components/pages/invoices/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const INVOICES = [
  {
    id: '5ecb868d0f437390ef3ac62c',
    currency: '$',
    customer: {
      email: 'contact@anahenisky.io',
      name: 'Ana Henisky',
    },
    issueDate: moment().subtract(1, 'hours').toDate().getTime(),
    status: 'paid',
    totalAmount: 55.5,
  },
  {
    id: '5ecb868ada8deedee0638502',
    currency: '$',
    customer: {
      email: 'sales@matt-jason.com',
      name: 'Matt Jason',
    },
    issueDate: moment()
      .subtract(2, 'days')
      .subtract(5, 'hours')
      .toDate()
      .getTime(),
    status: 'pending',
    totalAmount: 253.76,
  },
  {
    id: '5ecb868700aba84d0f1c0e48',
    currency: '$',
    customer: {
      email: 'support@terrythomas.io',
      name: 'Terry Thomas',
    },
    issueDate: moment()
      .subtract(6, 'days')
      .subtract(4, 'hours')
      .toDate()
      .getTime(),
    status: 'canceled',
    totalAmount: 781.5,
  },
  {
    id: '5ecb8682038e1ddf4e868764',
    currency: '$',
    customer: {
      email: 'contact@triv-shopper.co.uk',
      name: 'Triv Shopper',
    },
    issueDate: moment()
      .subtract(15, 'days')
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
    status: 'paid',
    totalAmount: 96.64,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100,
  },
}));

function InvoicesPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = React.useState([]);

  const getInvoices = React.useCallback(async () => {
    try {
      const data = { invoices: INVOICES };

      if (isMountedRef.current) {
        setInvoices(data.invoices);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Page className={classes.root} title="Invoice List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results invoices={invoices} />
        </Box>
      </Container>
    </Page>
  );
}

InvoicesPage.Guard = Protected;
InvoicesPage.Layout = DashboardLayout;

export default InvoicesPage;
