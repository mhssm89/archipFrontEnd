import React from 'react';

// import { API } from 'aws-amplify';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  CircularProgress,
  Divider,
  IconButton,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { ArrowRight as ArrowRightIcon, Edit as EditIcon } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
// import { deleteProductKind, updateProductKind } from 'src/graphql/mutations';
import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';

const getStatusLabel = (status) => {
  const map = {
    ACTIVE: {
      text: 'ACTIVE',
      color: 'success',
    },
    INACTIVE: {
      text: 'INACTIVE',
      color: 'error',
    },
  };

  const { text, color } = map[status];

  return <Label color={color}>{text}</Label>;
};

const useStyles = makeStyles(() => ({
  root: {},
}));

function Results({ className, query, queryName, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const {
    items,
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
  } = useTable({ query, queryName });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Product Kinds" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={1150}>
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
                  <TableCell>Arabic Name</TableCell>
                  <TableCell>English Name</TableCell>
                  <TableCell>Status</TableCell>
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
                        <TableCell>{item.name.arEG}</TableCell>
                        <TableCell>{item.name.enUS}</TableCell>
                        <TableCell>{getStatusLabel(item.status)}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            component={Link}
                            href={`/product-kinds/${item.id}/edit`}>
                            <SvgIcon fontSize="small">
                              <EditIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton component={Link} href="#">
                            <SvgIcon fontSize="small">
                              <ArrowRightIcon />
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
            return `${from}-${from + items.length - 1}`;
          }}
        />
      </Card>
      <BulkOperations
        open={enableBulkOperations}
        selected={selectedItems}
        isLoading={isBulkLoading}
        onMarkActive={handleMarkActive}
        onMarkInactive={handleMarkInactive}
        onDelete={handleDelete}
      />
    </div>
  );

  // ##################################################
  async function handleDelete() {
    try {
      // set loading
      setIsBulkLoading(true);

      // Loop through inactive items
      await Promise.all(
        selectedItems.map(async (id) => {
          // Make an API request
          // await API.graphql({
          //   query: deleteProductKind,
          //   variables: { input: { id } },
          // });
        }),
      );

      // Update items
      setItems([...items.filter((item) => !selectedItems.includes(item.id))]);

      // Reset selected items
      setSelectedItems([]);

      // Show success message
      enqueueSnackbar('Successfully deleted.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error processing request.', { variant: 'error' });
    } finally {
      // Finish
      setIsBulkLoading(false);
    }
  }

  async function handleMarkInactive() {
    try {
      // set loading
      setIsBulkLoading(true);

      // Get selected inactive items
      const selectedInactiveItems = items.filter(
        (item) => selectedItems.includes(item.id) && item.status == 'ACTIVE',
      );

      // Loop through inactive items
      await Promise.all(
        selectedInactiveItems.map(async (item) => {
          // Make an API request
          // await API.graphql({
          //   query: updateProductKind,
          //   variables: { input: { id: item.id, status: 'INACTIVE' } },
          // });
        }),
      );

      // Update items
      const updatedItems = [...items];
      selectedInactiveItems.forEach((item) => {
        updatedItems.find((i) => i.id == item.id).status = 'INACTIVE';
      });
      setItems([...updatedItems]);

      // Reset selected items
      setSelectedItems([]);

      // Show success message
      enqueueSnackbar('Successfully updated.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error processing request.', { variant: 'error' });
    } finally {
      // Finish
      setIsBulkLoading(false);
    }
  }

  async function handleMarkActive() {
    try {
      // set loading
      setIsBulkLoading(true);

      // Get selected inactive items
      const selectedInactiveItems = items.filter(
        (item) => selectedItems.includes(item.id) && item.status == 'INACTIVE',
      );

      // Loop through inactive items
      await Promise.all(
        selectedInactiveItems.map(async (item) => {
          // Make an API request
          // await API.graphql({
          //   query: updateProductKind,
          //   variables: { input: { id: item.id, status: 'ACTIVE' } },
          // });
        }),
      );

      // Update items
      const updatedItems = [...items];
      selectedInactiveItems.forEach((item) => {
        updatedItems.find((i) => i.id == item.id).status = 'ACTIVE';
      });
      setItems([...updatedItems]);

      // Reset selected items
      setSelectedItems([]);

      // Show success message
      enqueueSnackbar('Successfully updated.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error processing request.', { variant: 'error' });
    } finally {
      // Finish
      setIsBulkLoading(false);
    }
  }
}

export default Results;
