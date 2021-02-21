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
import { Search as SearchIcon, Trash as TrashIcon } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useTable from 'src/hooks/useTable';

const useStyles = makeStyles(() => ({
  root: {},
}));

function ProductResult({ className, query, ...rest }) {
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
      id: 1,
      partNo: '123456',
      quantity: 15,
      price: '100',
      discount: '5',
    },
    {
      id: 2,
      partNo: '789101',
      quantity: 20,
      price: '30',
      discount: '10',
    },
    {
      id: 3,
      partNo: '65489',
      quantity: 100,
      price: '12',
      discount: '3',
    },
  ];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Products" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Part #</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price (L.E)</TableCell>
                  <TableCell>Discount (%)</TableCell>
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
                        <TableCell>{item.partNo}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.discount}</TableCell>
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

export default ProductResult;
