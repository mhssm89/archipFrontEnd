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
  Typography,
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
import axios from 'axios';

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

function SGAsList({ className, query, setquery, ...rest }) {
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
  console.log(query);
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <Box p={2}>
          {/* <TextField
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
          /> */}
          <Typography variant="h3">
            Selling, General, and Administrative Expenses List
          </Typography>
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
                  <TableCell>Amount (EGP)</TableCell>
                  <TableCell>Bank Transaction #</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {query.map((item) => {
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
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{getStatusLabel(item.type)}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.bankTransaction}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            component={Link}
                            href={`/invoices/${item.id}`}>
                            <SvgIcon fontSize="small">
                              <Printer />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteInvoice(item.id);
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
            if (query.length == 0) return '0-0';
            return `${from}-${from + query.length - 1}`;
          }}
        />
      </Card>
    </div>
  );
  function deleteInvoice(invoiceID) {
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKENDURL}/transactions/${invoiceID}`)
      .then(() => {
        setquery([...query.filter((item) => item.id != invoiceID)]);
        enqueueSnackbar('Invoice has been deleted', {
          variant: 'error',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default SGAsList;
