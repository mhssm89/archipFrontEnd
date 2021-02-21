import React from 'react';

import {
  Box,
  Card,
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
  Printer as Printer,
  Trash2 as Trash,
  Search as SearchIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';

const useStyles = makeStyles(() => ({
  root: {},
}));

const getStatusLabel = (transactiontype) => {
  const map = {
    out: {
      text: 'OutCome',
      color: 'error',
    },
    in: {
      text: 'InCome',
      color: 'success',
    },
  };

  const { text, color } = map[transactiontype];

  return <Label color={color}>{text}</Label>;
};

function TransactionType({ className, query, ...rest }) {
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
      no: '1',
      date: '01-01-2021',
      type: 'in',
      amount: '1000',
    },
    {
      id: 2,
      no: '35',
      date: '01-01-2021',
      type: 'out',
      amount: '125000',
    },
    {
      id: 3,
      no: '52',
      date: '01-01-2021',
      type: 'out',
      amount: '6000',
    },
    {
      id: 4,
      no: '99',
      date: '01-01-2021',
      type: 'in',
      amount: '600',
    },
  ];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <Box p={2}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            style={{ width: '25%' }}
            onChange={() => {}}
            placeholder="Search Invocies"
            value=""
            variant="outlined"
          />
        </Box>
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isAllItemsSelected}
                      indeterminate={isSomeItemsSelected}
                      onChange={handleSelectAllItems}
                    />
                  </TableCell>
                  <TableCell>Number #</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Amount (L.E)</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {items.map((item) => {
                    const isItemSelected = selectedItems.includes(item.id);

                    return (
                      <TableRow
                        hover
                        key={item.id}
                        selected={selectedItems.indexOf(item.id) !== -1}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) =>
                              handleSelectOneItem(event, item.id)
                            }
                            value={isItemSelected}
                          />
                        </TableCell>
                        <TableCell>{item.no}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{getStatusLabel(item.type)}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              enqueueSnackbar('Print Invoice', {
                                variant: 'success',
                              });
                            }}>
                            <SvgIcon fontSize="small">
                              <Printer />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              enqueueSnackbar('Invoice has been deleted', {
                                variant: 'error',
                              });
                            }}>
                            <SvgIcon fontSize="small">
                              <Trash />
                            </SvgIcon>
                          </IconButton>
                        </TableCell>
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
      <BulkOperations
        open={enableBulkOperations}
        selected={selectedItems}
        isLoading={isBulkLoading}
        onMarkActive={() => {}}
        onMarkInactive={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

export default TransactionType;
