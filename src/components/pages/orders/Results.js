import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Checkbox,
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
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import { ArrowRight as ArrowRightIcon, Edit as EditIcon } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';

import BulkOperations from './BulkOperations';

const getStatusLabel = (paymentStatus) => {
  const map = {
    canceled: {
      text: 'Canceled',
      color: 'error',
    },
    completed: {
      text: 'Completed',
      color: 'success',
    },
    pending: {
      text: 'Pending',
      color: 'warning',
    },
    rejected: {
      text: 'Rejected',
      color: 'error',
    },
  };

  const { text, color } = map[paymentStatus];

  return <Label color={color}>{text}</Label>;
};

const applyPagination = (orders, page, limit) => {
  return orders.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles(() => ({
  root: {},
}));

function Results({ className, orders, ...rest }) {
  const classes = useStyles();
  const [selectedOrders, setSelectedOrders] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(10);

  const handleSelectAllOrders = (event) => {
    setSelectedOrders(
      event.target.checked ? orders.map((order) => order.id) : [],
    );
  };

  const handleSelectOneOrder = (event, orderId) => {
    if (!selectedOrders.includes(orderId)) {
      setSelectedOrders((prevSelected) => [...prevSelected, orderId]);
    } else {
      setSelectedOrders((prevSelected) =>
        prevSelected.filter((id) => id !== orderId),
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const paginatedOrders = applyPagination(orders, page, limit);
  const enableBulkOperations = selectedOrders.length > 0;
  const selectedSomeOrders =
    selectedOrders.length > 0 && selectedOrders.length < orders.length;
  const selectedAllOrders = selectedOrders.length === orders.length;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {orders.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(orders.length / limit)}
      </Typography>
      <Card>
        <CardHeader action={<GenericMoreButton />} title="Orders" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={1150}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAllOrders}
                      indeterminate={selectedSomeOrders}
                      onChange={handleSelectAllOrders}
                    />
                  </TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Method</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedOrders.map((order) => {
                  const isOrderSelected = selectedOrders.includes(order.id);

                  return (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isOrderSelected}
                          onChange={(event) =>
                            handleSelectOneOrder(event, order.id)
                          }
                          value={isOrderSelected}
                        />
                      </TableCell>
                      <TableCell>
                        {order.number}
                        <Typography variant="body2" color="textSecondary">
                          {moment(order.createdAt).format(
                            'DD MMM YYYY | hh:mm',
                          )}
                        </Typography>
                      </TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell>
                        {numeral(order.totalAmount).format(
                          `${order.currency}0,0.00`,
                        )}
                      </TableCell>
                      <TableCell>{getStatusLabel(order.status)}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <SvgIcon fontSize="small">
                            <EditIcon />
                          </SvgIcon>
                        </IconButton>
                        <IconButton component={Link} href="/orders/1">
                          <SvgIcon fontSize="small">
                            <ArrowRightIcon />
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={orders.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <BulkOperations open={enableBulkOperations} selected={selectedOrders} />
    </div>
  );
}

export default Results;
