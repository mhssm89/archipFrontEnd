import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Grid,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import Logo from 'src/components/common/Logo';
//import Scrollbar from '../../Scrollbar';

const InvoicePreview = (props) => {
  const { invoice, customer, ...other } = props;

  return invoice ? (
    <Paper {...other}>
      <Grid
        container
        justify="space-between"
        spacing={3}
        xs={12}
        style={{ marginTop: '1%' }}>
        <Grid item md={6} style={{ margin: '1%' }}>
          <Logo
            style={{
              borderRadius: 4,
              backgroundColor: 'white',
            }}
            width={140}
            height={45}
          />
        </Grid>
        <Grid item md={5}>
          <Typography
            align="right"
            color="textPrimary"
            variant="body2"
            style={{ margin: '1%' }}>
            info@archip.com
            <br />
            (+02) xxx xxx xx
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginLeft: '1%' }}>
        <Typography color="textPrimary" variant="body2">
          Tyaran Street
          <br />
          Building 20 - Floor 2
          <br />
          Naser City , Cairo , Egypt
        </Typography>
      </Grid>
      <Divider style={{ margin: '1%' }} />
      <Grid item xs={12} style={{ margin: '1%', marginBottom: '3%' }}>
        <Typography align="center" color="textPrimary" variant="h1">
          {invoice.logestic ? 'SG&A invoice' : 'Invoice'}
        </Typography>
        <Divider style={{ margin: '1%' }} />
        <Typography color="textPrimary" variant="h4" style={{ margin: '1%' }}>
          {invoice.type == 'in' ? 'Paid to' : 'Paid By'} Arch IP
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
          style={{ margin: '1%' }}>
          Invoice # {invoice.id}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ margin: '1%' }}>
          Project: {invoice.project['name']}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ margin: '1%' }}>
          Date: {invoice.date}
        </Typography>
        <Divider style={{ margin: '1%' }} />
        <Typography color="textPrimary" variant="h4" style={{ margin: '1%' }}>
          Customer Info.
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ margin: '1%' }}>
          Name : {customer.firstName} {customer.lastName}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ margin: '1%' }}>
          Company : {customer.companyName}
        </Typography>
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ margin: '1%' }}>
          Customer address : {customer.address}
        </Typography>
        <Divider />
        <Typography
          align="right"
          color="textPrimary"
          variant="h4"
          style={{ margin: '1%' }}>
          Total: {invoice.amount}
        </Typography>
        <Divider style={{ margin: '1%' }} />
      </Grid>
      <Grid item xs={12} style={{ margin: '1%' }}>
        <Typography
          style={{ margin: '1%' }}
          color="textSecondary"
          variant="body2">
          Please make sure you have read all the inforamtion issued in this
          invoice.
        </Typography>
      </Grid>
    </Paper>
  ) : (
    <Typography>Waiting result</Typography>
  );
};

InvoicePreview.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoicePreview;
