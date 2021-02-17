import React from 'react';

import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import clsx from 'clsx';

import Link from 'src/components/common/Link';

import InvoicePDF from './InvoicePDF';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

function Header({ className, invoice, ...rest }) {
  const classes = useStyles();
  const [viewPDF, setViewPDF] = React.useState(false);

  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Dashboard
          </Link>
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Management
          </Link>
          <Typography variant="body1" color="textPrimary">
            Invoices
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Invoice Details
        </Typography>
      </Grid>
      <Grid item>
        <Hidden smDown>
          <Button className={classes.action} onClick={() => setViewPDF(true)}>
            Preview PDF
          </Button>
        </Hidden>
        <PDFDownloadLink
          document={<InvoicePDF invoice={invoice} />}
          fileName="invoice"
          style={{ textDecoration: 'none' }}>
          <Button
            color="secondary"
            variant="contained"
            className={classes.action}>
            Download PDF
          </Button>
        </PDFDownloadLink>
        <Dialog fullScreen open={viewPDF}>
          <Box height="100%" display="flex" flexDirection="column">
            <Box bgcolor="common.white" p={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setViewPDF(false)}>
                <NavigateBeforeIcon />
                Back
              </Button>
            </Box>
            <Box flexGrow={1}>
              <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
                <InvoicePDF invoice={invoice} />
              </PDFViewer>
            </Box>
          </Box>
        </Dialog>
      </Grid>
    </Grid>
  );
}

export default Header;
