import React from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Details from 'src/components/pages/customers/customer/Details';
import Header from 'src/components/common/Header';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';
import { useRouter } from 'next/router';
import axios from 'axios';

import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

////////////////////////////////////
import InvoicePDF from 'src/components/pages/invoice/InvoicePDF';
import InvoicePreview from 'src/components/pages/invoice/InvoicePreview';
///////////////////////////////////

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
  { title: 'Project', href: '/projects' },
  { title: 'Print Invoice' },
];

function InvoicePage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const router = useRouter();
  const [invoice, setInvoice] = React.useState(null);
  const [viewPDF, setViewPDF] = React.useState(false);
  const [customer, setCustomer] = React.useState([]);

  const getInvoice = React.useCallback(async () => {
    try {
      const invoiceId = router.query['invoiceId'];
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/transactions/${invoiceId}`,
      );
      const data = res.data;
      const cutomerid = data.project['customer'];
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/customers/${cutomerid}`,
      );
      setCustomer(response.data);

      if (isMountedRef.current) {
        setInvoice(data);
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
    <>
      <Page className={classes.root} title="Invoice details">
        <Container maxWidth={false}>
          <Header links={headerLinks} mainText="View Invoice" />
          <Grid
            container
            item
            spacing={2}
            justify="flex-end"
            style={{ margin: 'auto' }}>
            <Grid item>
              <Button
                color="primary"
                onClick={() => setViewPDF(true)}
                variant="outlined">
                Preview PDF
              </Button>
            </Grid>
            <Grid item>
              <PDFDownloadLink
                document={<InvoicePDF invoice={invoice} customer={customer} />}
                fileName="invoice"
                style={{ textDecoration: 'none' }}>
                <Button color="primary" variant="contained" align="right">
                  Download PDF
                </Button>
              </PDFDownloadLink>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <InvoicePreview
            invoice={invoice}
            customer={customer}
            style={{ margin: '10px' }}
          />
        </Container>
      </Page>
      <Dialog fullScreen open={viewPDF}>
        <Box style={{ margin: '0.3%' }}>
          <Button
            md={4}
            xs={12}
            color="primary"
            startIcon={<ArrowLeftIcon fontSize="small" />}
            onClick={() => setViewPDF(false)}
            variant="contained">
            Back
          </Button>
        </Box>
        <PDFViewer height="100%" style={{ border: 'none' }} width="100%">
          <InvoicePDF invoice={invoice} customer={customer} />
        </PDFViewer>
      </Dialog>
    </>
  );
}

InvoicePage.Guard = Protected;
InvoicePage.Layout = DashboardLayout;

export default InvoicePage;
