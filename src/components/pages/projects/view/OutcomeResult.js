import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  CircularProgress,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useRouter } from 'next/router';
import axios from 'axios';
import useTable from 'src/hooks/useTable';

const useStyles = makeStyles(() => ({
  root: {},
}));

function OutcomeResult({ className, setotalutcome, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [transaction, setTransaction] = React.useState([]);
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const {
    page,
    limit,
    hasNext,
    hasPrev,
    isLoading: isTableLoading,
    handlePageChange,
    handleLimitChange,
  } = useTable({ transaction });

  const projectId = router.query['projectId'];
  React.useEffect(() => {
    if (projectId) {
      fetchTransaction();
    }
  }, [projectId]);

  async function fetchTransaction() {
    try {
      if (!projectId) return;
      const res = await axios.get(
        `http://localhost:1337/transactions?_where[type]=out&[project]=${projectId}`,
      );
      setTransaction(res.data);
      var total = 0;
      res.data.map((item) => {
        total = total + item.amount;
        return total;
      });
      setotalutcome(total);
    } catch (err) {
      enqueueSnackbar(`error ${err}`, { variant: 'error' });
    }
  }
  return transaction ? (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Outcome payment" style={{ background: '#CDDCE3' }} />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Serial</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount </TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {transaction.map((item) => {
                    return (
                      <TableRow hover key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              )}
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={-1}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
          nextIconButtonProps={{ disabled: !hasNext }}
          backIconButtonProps={{ disabled: !hasPrev }}
          labelDisplayedRows={({ from }) => {
            if (transaction.length == 0) return '0-0';
            return `${from}-${from + transaction.length - 1}`;
          }}
        />
      </Card>
    </div>
  ) : (
    <Typography>waiting</Typography>
  );
}

export default OutcomeResult;
