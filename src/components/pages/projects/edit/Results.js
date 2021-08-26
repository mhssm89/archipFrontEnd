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

import BulkOperations from './BulkOperations';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Results({ className, query, setproject, transferRate, ...rest }) {
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
  // console.log(query, 'query from result ');
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
                  <TableCell>Price </TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>Discount (%)</TableCell>
                  <TableCell>Sale Percentage (%)</TableCell>
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
                  {query.projectdetail.map((item) => {
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
                        <TableCell style={{ textAlign: 'center' }}>
                          {item.product.partNumber}
                        </TableCell>
                        <TableCell style={{ width: '10%' }}>
                          <TextField
                            type="number"
                            name={`qnty${item.id}`}
                            variant="outlined"
                            value={item.qnty}
                            style={{ textAlign: 'center' }}
                            onChange={(e) => {
                              item.qnty = Number(e.target.value);
                              setproject({ ...query });
                            }}
                          />
                        </TableCell>
                        <TableCell>{item.EndUserPrice}</TableCell>
                        <TableCell>
                          {(() => {
                            switch (item.product.currency) {
                              case 1:
                                return 'EGP';
                              case 2:
                                return 'USD';
                              case 3:
                                return 'EUR';
                            }
                          })()}
                        </TableCell>

                        <TableCell>{item.product.discount}</TableCell>
                        <TableCell style={{ width: '20%' }}>
                          <TextField
                            type="number"
                            name={`salepercent${item.id}`}
                            variant="outlined"
                            value={item.saleprecentage}
                            style={{ width: '60%' }}
                            onChange={(e) => {
                              item.SalePrice =
                                (item.EndUserPrice * Number(e.target.value)) /
                                  100 +
                                item.EndUserPrice;
                              item.saleprecentage = Number(e.target.value);
                              setproject({ ...query });
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          {/* {item.SalePrice
                            ? Math.round(
                                (item.SalePrice + Number.EPSILON) * 100,
                              ) / 100
                            : item.EndUserPrice} */}
                          {(() => {
                            if (item.saleprice) {
                              if (item.product.currency == 2) {
                                return item.SalePrice * transferRate.usd;
                              }
                              if (item.product.currency == 3) {
                                return item.SalePrice * transferRate.eur;
                              }
                            } else {
                              if (item.product.currency == 2) {
                                return item.EndUserPrice * transferRate.usd;
                              }
                              if (item.product.currency == 3) {
                                return item.EndUserPrice * transferRate.eur;
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
    axios
      .delete(`http://localhost:1337/project-details/${productId}`)
      .then(() => {
        setproject({
          ...query,
          projectdetail: query.projectdetail.filter(
            (item) => item.id != productId,
          ),
        });
        enqueueSnackbar('deleted', { variant: 'error' });
      });
  }
}

export default Results;
