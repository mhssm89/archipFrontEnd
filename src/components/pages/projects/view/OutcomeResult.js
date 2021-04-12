import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  ArrowRight as ArrowRightIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  Trash as TrashIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Link from 'src/components/common/Link';

import useTable from 'src/hooks/useTable';

const useStyles = makeStyles(() => ({
  root: {},
}));

function OutcomeResult({ className, query, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const {
    // items,
    selectedItems,
    isAllItemsSelected,
    isSomeItemsSelected,
    page,
    limit,
    hasNext,
    hasPrev,
    isLoading: isTableLoading,
    setItems,
    setSelectedItems,
    enableBulkOperations,
    handleSelectAllItems,
    handleSelectOneItem,
    handlePageChange,
    handleLimitChange,
  } = useTable({ query });

  const items = [
    {
      id: '0',
      date: '15/10/2019',
      amount: '90000',
    },
    {
      id: '2',
      date: '4/8/2018',
      amount: '1000',
    },
  ];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Outcome payment" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount (EGP)</TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {items.map((item) => {
                    return (
                      <TableRow hover key={item.id}>
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
            if (items.length == 0) return '0-0';
            return `${from}-${from + items.length - 1}`;
          }}
        />
      </Card>
    </div>
  );
}

export default OutcomeResult;
