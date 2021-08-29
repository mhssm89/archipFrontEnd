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

function Results({ className, query, setPOQ, transferRate, ...rest }) {
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
                  {query.poqDetail.map((item) => {
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
                        <TableCell>{item.product.partNumber}</TableCell>
                        <TableCell style={{ width: '10%' }}>
                          <TextField
                            type="number"
                            name={`qnty${item.id}`}
                            variant="outlined"
                            value={item.qnty}
                            onChange={(e) => {
                              item.qnty = Number(e.target.value);
                              setPOQ({ ...query });
                            }}
                          />
                        </TableCell>
                        <TableCell>{item.enduserprice}</TableCell>
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
                            value={item.salepercentage}
                            style={{ width: '60%' }}
                            onChange={(e) => {
                              // e.target.value < 0
                              //   ? (e.target.value = 0)
                              //   : e.target.value;
                              item.saleprice =
                                (item.enduserprice * Number(e.target.value)) /
                                  100 +
                                item.enduserprice;
                              item.salepercentage = Number(e.target.value);
                              setPOQ({ ...query });
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          {/* {Math.round((item.saleprice + Number.EPSILON) * 100) /
                            100} */}
                          {/* {(() => {
                            if (item.saleprice) {
                              if (item.product.currency == 2) {
                                return item.saleprice * transferRate.usd;
                              }
                              if (item.product.currency == 3) {
                                return item.saleprice * transferRate.eur;
                              }
                            } else {
                              if (item.product.currency == 2) {
                                return item.enduserprice * transferRate.usd;
                              }
                              if (item.product.currency == 3) {
                                return item.enduserprice * transferRate.eur;
                              }
                            }
                          })()} */}
                          {item.saleprice * item.qnty}
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
            if (query.poqDetail.length == 0) return '0-0';
            return `${from}-${from + query.poqDetail.length - 1}`;
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

  // setPOQ({ ...query, poqDetail: xxxxxxxxxx })

  //delete product
  function deleteProduct(productId) {
    axios
      .delete(`h${process.env.NEXT_PUBLIC_BACKENDURL}/poqdetails/${productId}`)
      .then(() => {
        setPOQ({
          ...query,
          poqDetail: query.poqDetail.filter((item) => item.id != productId),
        });
        enqueueSnackbar('deleted', { variant: 'error' });
      });
  }
}

export default Results;
