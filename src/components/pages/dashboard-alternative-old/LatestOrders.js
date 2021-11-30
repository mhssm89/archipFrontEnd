import React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const labelColors = {
  complete: 'success',
  pending: 'warning',
  rejected: 'error',
};

const ORDERS = [
  {
    id: '5eff2548979e396cb4b000ba',
    createdAt: moment()
      .subtract(7, 'minutes')
      .subtract(10, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      email: 'ekaterina@devias.io',
      name: 'Ekaterina Tankova',
    },
    currency: '$',
    items: 7,
    number: 'DEV-1042',
    status: 'pending',
    totalAmount: 524.0,
  },
  {
    id: '5eff254e46b753a166e7d7af',
    createdAt: moment()
      .subtract(2, 'hours')
      .subtract(12, 'minutes')
      .subtract(50, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      email: 'cao.yu@devias.io',
      name: 'Cao Yu',
    },
    currency: '$',
    items: 8,
    number: 'DEV-1041',
    status: 'complete',
    totalAmount: 693.0,
  },
  {
    id: '5eff2553e1c551e2e28a9205',
    createdAt: moment()
      .subtract(5, 'hours')
      .subtract(39, 'minutes')
      .subtract(12, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      email: 'alex.richardson@devias.io',
      name: 'Alex Richardson',
    },
    currency: '$',
    items: 4,
    number: 'DEV-1040',
    status: 'rejected',
    totalAmount: 215.0,
  },
  {
    id: '5eff25590f3e28f013c39a0e',
    createdAt: moment()
      .subtract(5, 'hours')
      .subtract(46, 'minutes')
      .subtract(21, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      email: 'anje.keiser@devias.io',
      name: 'Anje Keizer',
    },
    currency: '$',
    items: 1,
    number: 'DEV-1039',
    status: 'pending',
    totalAmount: 25.0,
  },
  {
    id: '5eff255f57499089243805d8',
    createdAt: moment()
      .subtract(8, 'hours')
      .subtract(19, 'minutes')
      .subtract(54, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@devias.io',
    },
    currency: '$',
    items: 5,
    number: 'DEV-1038',
    status: 'complete',
    totalAmount: 535.0,
  },
  {
    id: '5eff25658d416fc5adb96a3a',
    createdAt: moment()
      .subtract(1, 'days')
      .subtract(45, 'minutes')
      .subtract(12, 'seconds')
      .toDate()
      .getTime(),
    customer: {
      email: 'merrile.burgett@devias.io',
      name: 'Merrile Burgett',
    },
    currency: '$',
    items: 2,
    number: 'DEV-1037',
    status: 'complete',
    totalAmount: 56.0,
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

function LatestOrders({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [orders, setOrders] = React.useState([]);

  const getOrders = React.useCallback(async () => {
    try {
      const data = { orders: ORDERS };

      if (isMountedRef.current) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Number
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.number}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    {numeral(order.totalAmount).format(
                      `${order.currency}0,0.00`,
                    )}
                  </TableCell>
                  <TableCell>
                    <Label color={labelColors[order.status]}>
                      {order.status}
                    </Label>
                  </TableCell>
                  <TableCell align="right">
                    {moment(order.createdAt).format('DD MMM, YYYY hh:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={Link}
          size="small"
          href="/orders"
          endIcon={<NavigateNextIcon />}>
          See all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestOrders;
