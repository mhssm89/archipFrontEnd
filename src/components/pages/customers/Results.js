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
  Grid,
  Dialog,
  Button,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  ArrowRight as ArrowRightIcon,
  Edit as EditIcon,
  Trash as TrashIcon,
  Search as SearchIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Link from 'src/components/common/Link';
import useTable from 'src/hooks/useTable';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import FormSelect from '../../controls/FormSelect';
import FormInput from 'src/components/controls/FormInput';
import BulkOperations from './BulkOperations';
import axios from 'axios';
import DeleteDialoge from '../../controls/DeleteDialoug';
const useStyles = makeStyles(() => ({
  root: {},
}));
const validationSchema = yup.object().shape({
  filter: yup
    .object()
    .shape({ label: yup.string(), id: yup.string() })
    .nullable(),
  search: yup.string(),
});

const filterOptions = [
  { label: 'fist name', id: 'firstName' },
  { label: 'Last name', id: 'lastName' },
  { label: 'Compnay', id: 'companyName' },
  { label: 'Phone Number', id: 'phonenumber' },
  { label: 'Email address', id: 'emailaddress' },
  { label: 'Position', id: 'position' },
  { label: 'Customer Categoery', id: 'customer_category.category' },
];

function Results({ className, query, setquery, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const [OpenDeleteDialoge, setOpenDeleteDialoge] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState({});

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

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      filter: filterOptions[0],
      search: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    watch,
    formState: { isSubmitting },
  } = methods;
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx(classes.root, className)}
            {...rest}>
            <Grid
              container
              spacing={3}
              alignItems={'center'}
              style={{ paddingTop: '1rem', margin: 'auto' }}>
              <Grid item xs={4}>
                <FormSelect
                  options={filterOptions}
                  name="filter"
                  label="Filter"
                  variant="outlined"
                  setValue={setValue}
                  errorObj={errors}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <FormInput
                  name="search"
                  label="Search"
                  variant="outlined"
                  errorObj={errors}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}>
                  Search
                </Button>
                <Button
                  variant="outlined"
                  type="button"
                  color="secondary"
                  style={{ marginLeft: '1rem' }}
                  disabled={isSubmitting}
                  onClick={() => {
                    resetFilter();
                  }}>
                  reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
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
                  <TableCell>Name</TableCell>

                  <TableCell>Company</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Customer Category</TableCell>
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
                        <TableCell>{`${item.firstName} ${item.lastName}`}</TableCell>
                        <TableCell>{item.companyName}</TableCell>
                        <TableCell>{item.position}</TableCell>
                        <TableCell>{item.phoneNumber}</TableCell>
                        <TableCell>{item.emailaddress}</TableCell>
                        <TableCell>{item.customer_category.category}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() =>
                              handelDialog({
                                id: item.id,
                                name: `${item.firstName} ${item.lastName} Customer`,
                              })
                            }>
                            <SvgIcon fontSize="small">
                              <TrashIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            component={Link}
                            href={`/customers/${item.id}/edit`}>
                            <SvgIcon fontSize="small">
                              <EditIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            component={Link}
                            href={`/customers/${item.id}`}>
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
      <Dialog open={OpenDeleteDialoge}>
        <DeleteDialoge
          setOpenDialoge={setOpenDeleteDialoge}
          deletedValue={deleteItem.name}
          runFunction={deletecustomer}
        />
      </Dialog>
    </div>
  );

  async function resetFilter() {
    try {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/customers?_where[isDeleted]=0`,
        )
        .then((res) => {
          setquery(res.data);
        });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  }
  async function onSubmit({ filter, search }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/customers?_where[${filter.id}_contains]=${search}&[isDeleted]=0`,
        )
        .then((res) => {
          console.log(res.data);
          setquery(res.data);
          enqueueSnackbar('Filter applied', {
            variant: 'success',
          });
        })
        .catch((err) => {
          enqueueSnackbar('Error in filtering', { variant: 'error' });
          console.log(err);
        });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error in filtering', { variant: 'error' });
      console.log(err);

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new product.',
      });
    }
  }
  function handelDialog(customer) {
    setOpenDeleteDialoge(true);
    setDeleteItem(customer);
  }

  async function deletecustomer() {
    axios
      .put(`${process.env.NEXT_PUBLIC_BACKENDURL}/customers/${deleteItem.id}`, {
        isDeleted: 1,
      })
      .then((deletedItem) => {
        setquery(query.filter((item) => item.id != deleteItem.id));
      });
  }
}

export default Results;
