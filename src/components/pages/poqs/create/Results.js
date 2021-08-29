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
  AlignCenter,
  Search as SearchIcon,
  Trash as TrashIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Results({ className, query, setproduct, transferRate, ...rest }) {
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
                  <TableCell>Part #</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>Discount (%)</TableCell>
                  <TableCell>Sale Percentage (%) </TableCell>
                  <TableCell>Sale price </TableCell>
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
                    console.log(query);
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
                        <TableCell>{item.partNumber}</TableCell>
                        <TableCell>{item.qnty}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.currency['name']}</TableCell>
                        <TableCell>{item.discount}</TableCell>
                        <TableCell style={{ width: '20%' }}>
                          <TextField
                            type="number"
                            name={`salepercent${item.id}`}
                            defaultValue={0}
                            variant="outlined"
                            style={{ width: '70%', textAlign: 'center' }}
                            onChange={(e) => {
                              item.saleprice =
                                (item.price * Number(e.target.value)) / 100 +
                                item.price;
                              item.salepercentage = Number(e.target.value);
                              setproduct([...query]);
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          {/* {item.saleprice
                            ? currency['name'] == 'USD'
                              ? item.saleprice * transferRate.usd
                              : item.saleprice * transferRate.eur
                            : currency['name'] == 'USD'
                            ? item.price * transferRate.usd
                            : item.price * transferRate.eur} */}
                          {(() => {
                            if (item.saleprice) {
                              if (item.currency['name'] === 'USD') {
                                return (
                                  item.saleprice * transferRate.usd * item.qnty
                                );
                              }
                              if (item.currency['name'] === 'EUR') {
                                return (
                                  item.saleprice * transferRate.eur * item.qnty
                                );
                              }
                            } else {
                              if (item.currency['name'] === 'USD') {
                                return (
                                  item.price * transferRate.usd * item.qnty
                                );
                              }
                              if (item.currency['name'] === 'EUR') {
                                return (
                                  item.price * transferRate.eur * item.qnty
                                );
                              }
                            }
                          })()}
                        </TableCell>
                        <TableCell align="right">
                          <IconButton onClick={() => deleteProduct(item.id)}>
                            <SvgIcon fontSize="small">
                              <TrashIcon />
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

  function deleteProduct(productId) {
    setproduct(query.filter((item) => item.id != productId));
    enqueueSnackbar('deleted', { variant: 'error' });
  }
}

export default Results;
