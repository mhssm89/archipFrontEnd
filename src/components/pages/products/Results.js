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
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Link from 'src/components/common/Link';
import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';

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

  const items = [
    {
      id: 1,
      partNo: '123456',
      partName: 'sensore',
      partBrand: 'honeywell',
      price: '100',
      discount: '5',
      partdescription: 'this is desc.',
      partdatasheet: 'link',
      partstatus: ' expired',
      priceUpdatedOn: '01-01-2021',
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
            placeholder="Search Products"
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
                  <TableCell>Part #</TableCell>
                  <TableCell>Part Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Price (EGP)</TableCell>
                  <TableCell>Discount (%)</TableCell>
                  <TableCell>Part desc.</TableCell>
                  <TableCell>Part Data sheet</TableCell>
                  <TableCell>Part Status</TableCell>
                  <TableCell>Price Last Update</TableCell>
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
                        <TableCell>{item.partNo}</TableCell>
                        <TableCell>{item.partName}</TableCell>
                        <TableCell>{item.partBrand}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.discount}</TableCell>
                        <TableCell>{item.partdescription}</TableCell>
                        <TableCell>{item.partdatasheet}</TableCell>
                        <TableCell>{item.partstatus}</TableCell>
                        <TableCell>{item.priceUpdatedOn}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            component={Link}
                            href={`/products/${item.id}/edit`}>
                            <SvgIcon fontSize="small">
                              <EditIcon />
                            </SvgIcon>
                          </IconButton>
                          {/* <IconButton
                            component={Link}
                            href={`/products/${item.id}`}>
                            <SvgIcon fontSize="small">
                              <ArrowRightIcon />
                            </SvgIcon>
                          </IconButton> */}
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

export default Results;
