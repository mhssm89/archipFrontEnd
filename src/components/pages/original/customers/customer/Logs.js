import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Label from 'src/components/common/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const LOGS = [
  {
    id: '5ece2cfeb6e2ac847bba11ce',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds')
      .toDate()
      .getTime(),
    description: 'Purchase',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/purchase',
    status: 200,
  },
  {
    id: '5ece2d02510484b2952e1e05',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds')
      .toDate()
      .getTime(),
    description: 'Purchase',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/purchase',
    status: 522,
  },
  {
    id: '5ece2d08e2748e4e9788901a',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(8, 'minutes')
      .subtract(23, 'seconds')
      .toDate()
      .getTime(),
    description: 'Cart remove',
    ip: '84.234.243.42',
    method: 'DELETE',
    route: '/api/products/d65654e/remove',
    status: 200,
  },
  {
    id: '5ece2d0c47214e342c2d7f28',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(20, 'minutes')
      .subtract(54, 'seconds')
      .toDate()
      .getTime(),
    description: 'Cart add',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/d65654e/add',
    status: 200,
  },
  {
    id: '5ece2d11e4060a97b2b57623',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(34, 'minutes')
      .subtract(16, 'seconds')
      .toDate()
      .getTime(),
    description: 'Cart add',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/c85727f/add',
    status: 200,
  },
  {
    id: '5ece2d16cf6d53d8e33656af',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(54, 'minutes')
      .subtract(30, 'seconds')
      .toDate()
      .getTime(),
    description: 'View product',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/c85727f',
    status: 200,
  },
  {
    id: '5ece2d1b2ec5071be9286a96',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(56, 'minutes')
      .subtract(40, 'seconds')
      .toDate()
      .getTime(),
    description: 'Get products',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products',
    status: 200,
  },
  {
    id: '5ece2d22e68d5498917e47bc',
    createdAt: moment()
      .subtract(2, 'days')
      .subtract(57, 'minutes')
      .subtract(5, 'seconds')
      .toDate()
      .getTime(),
    description: 'Login',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/login',
    status: 200,
  },
];

const useStyles = makeStyles(() => ({
  root: {},
  methodCell: {
    width: 100,
  },
  statusCell: {
    width: 64,
  },
}));

function Logs({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [logs, setLogs] = React.useState([]);

  const getLogs = React.useCallback(async () => {
    try {
      const data = { logs: LOGS };

      if (isMountedRef.current) {
        setLogs(data.logs);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getLogs();
  }, [getLogs]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer logs" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1150}>
          <Table>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className={classes.methodCell}>
                    <Typography variant="h6" color="textPrimary">
                      {log.method}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.statusCell}>
                    <Label color={log.status === 200 ? 'success' : 'error'}>
                      {log.status}
                    </Label>
                  </TableCell>
                  <TableCell>{log.route}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell align="right">{log.ip}</TableCell>
                  <TableCell align="right">
                    {moment(log.createdAt).format('YYYY/MM/DD | hh:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default Logs;
