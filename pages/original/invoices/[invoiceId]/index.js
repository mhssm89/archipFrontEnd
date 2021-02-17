import React from 'react';

// import { useRouter } from 'next/router';
import { Box, Container, Divider, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/invoices/invoice/Header';
import InvoicePreview from 'src/components/pages/invoices/invoice/InvoicePreview';
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

function InvoiceDetailsPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  // const router = useRouter();
  const [invoice, setInvoice] = React.useState(null);

  const getInvoice = React.useCallback(async () => {
    try {
      // Get invoiceId
      // const { invoiceId } = router.query;
      const data = {
        invoice: {
          id: '5ecb86785312dcc69b5799ad',
          currency: '$',
          customer: {
            address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
            company: 'Countdown Grey Lynn',
            email: 'contact@anahenisky.io',
            name: 'Ana Henisky',
            taxId: '6934656584231',
          },
          dueDate: moment().toDate().getTime(),
          issueDate: moment().subtract(1, 'hours').toDate().getTime(),
          items: [
            {
              id: '5ecb8694db1760a701dfbf74',
              currency: '$',
              description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
              unitAmount: 55.5,
            },
          ],
          number: 'DEV-9483',
          status: 'paid',
          subtotalAmount: 50.0,
          taxAmount: 5.5,
          totalAmount: 55.5,
        },
      };

      if (isMountedRef.current) {
        setInvoice(data.invoice);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return (
    <Page className={classes.root} title="Invoice Details">
      <Container maxWidth="lg">
        <Header invoice={invoice} />
        <Box my={2}>
          <Divider />
        </Box>
        <InvoicePreview invoice={invoice} />
      </Container>
    </Page>
  );
}

InvoiceDetailsPage.Guard = Protected;
InvoiceDetailsPage.Layout = DashboardLayout;

export default InvoiceDetailsPage;
