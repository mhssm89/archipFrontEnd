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
  Dialog,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Search as SearchIcon, Trash as TrashIcon } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useTable from 'src/hooks/useTable';
import Poqdetail from '../../projects/create/Poqdetail';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Results({ className, query, ...rest }) {
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

  // const items = [
  //   {
  //     id: 1,
  //     partNumber: '123456',
  //     partName: 'test',
  //     qnty: 15,
  //     saleprice: '100',
  //     discount: '5',
  //   },
  //   {
  //     id: 2,
  //     partNumber: '789101',
  //     partName: 'test',
  //     qnty: 20,
  //     saleprice: '30',
  //     discount: '10',
  //   },
  //   {
  //     id: 3,
  //     partNumber: '65489',
  //     partName: 'test',
  //     qnty: 100,
  //     saleprice: '12',
  //     discount: '3',
  //   },
  //];
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
                  <TableCell>Part Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Sale Price </TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {query.map((item) => {
                    return (
                      <TableRow hover key={item.id}>
                        <TableCell>{item.product['partNumber']}</TableCell>
                        <TableCell>{item.product['partName']}</TableCell>
                        <TableCell>{item.qnty}</TableCell>
                        <TableCell>{item.saleprice}</TableCell>
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
            if (query.length == 0) return '0-0';
            return `${from}-${from + query.length - 1}`;
          }}
        />
      </Card>
    </div>
  );
}

export default Results;
