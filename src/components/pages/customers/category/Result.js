import React from 'react';

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
  Dialog,
  Button,
  Grid,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  AlignCenter,
  Search as SearchIcon,
  Trash as TrashIcon,
  Edit as EditIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';
import axios from 'axios';
import FormInput from 'src/components/controls/FormInput';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EditDialog from './EditDialog';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {},
  inputForm: {
    margin: 'auto',
  },
  submitbutton: {
    width: '90%',
  },
  result: {
    marginTop: '20px',
    margin: 'auto',
  },
}));

const validationSchema = yup.object().shape({
  categoryName: yup.string().max(255).required('Required.'),
});

function Results({ className, query, setCategory, setvalue, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const [editDialoug, setEditDialoug] = React.useState(false);
  const [editCategory, setEditCategory] = React.useState([]);
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
                  <TableCell>Category Name</TableCell>
                  <TableCell align="right">Action</TableCell>
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
                        <TableCell>{item.category}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              setEditDialoug(true);
                              setEditCategory({
                                id: item.id,
                                category: item.category,
                              });
                            }}>
                            <SvgIcon fontSize="small">
                              <EditIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteCategory(item.id);
                            }}>
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
      <Dialog open={editDialoug}>
        <EditDialog
          seteditdialoug={setEditDialoug}
          editCategory={editCategory}
          setCategory={setCategory}
          category={query}
        />
      </Dialog>
    </div>
  );

  function deleteCategory(categoryID) {
    axios
      .delete(`http://localhost:1337/customer-categories/${categoryID}`)
      .then(() => {
        setCategory([...query.filter((item) => item.id != categoryID)]);
        enqueueSnackbar('deleted', { variant: 'error' });
      });
  }
}

export default Results;
