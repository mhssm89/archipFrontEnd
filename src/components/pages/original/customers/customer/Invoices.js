import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const INVOICES = [
  {
    id: '5ece2cef3e562cbd61996259',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: moment().toDate().getTime(),
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25,
  },
  {
    id: '5ece2cf461b9484866f2968c',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: moment().toDate().getTime(),
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25,
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

function Invoices({ className, ...rest }) {
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
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Customer invoices" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1150}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>#{invoice.id}</TableCell>
                  <TableCell>
                    {moment(invoice.issueDate).format('DD/MM/YYYY | HH:MM')}
                  </TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>
                    {invoice.currency}
                    {invoice.value}
                  </TableCell>
                  <TableCell>
                    {/* <Label color={statusColors[invoice.status]} > */}
                    <Label color="primary">{invoice.status}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton component={Link} href="//invoices/1">
                      <SvgIcon fontSize="small">
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

export default Invoices;
