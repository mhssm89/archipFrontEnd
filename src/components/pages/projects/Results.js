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
  Grid,
  Button,
  Dialog,
  Select,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  ArrowRight as ArrowRightIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  Trash as TrashIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useTable from 'src/hooks/useTable';
import BulkOperations from './BulkOperations';
import { FormProvider, useForm } from 'react-hook-form';
import FormSelect from '../../controls/FormSelect';
import FormInput from 'src/components/controls/FormInput';
import DeleteDialoge from '../../controls/DeleteDialoug';
import axios from 'axios';
import { filter, values } from 'lodash';
import FormDatePicker from '../../controls/FormDatePicker';
import { fr } from 'date-fns/locale';
const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({
  filter: yup
    .object()
    .shape({ label: yup.string(), id: yup.string() })
    .nullable(),
  search: yup.string(),
  startDate: yup.date().nullable(),
  endDate: yup.date().nullable(),
});

const getStatusLabel = (projectStatus) => {
  const map = {
    Negotiation: {
      text: 'Negotiation',
      color: 'error',
    },
    Signed: {
      text: 'Signed',
      color: 'secondary',
    },
    Inprogress: {
      text: 'InProgress',
      color: 'warning',
    },
    Finished: {
      text: 'Finished',
      color: 'success',
    },
  };

  const { text, color } = map[projectStatus];

  return <Label color={color}>{text}</Label>;
};
const filterOptions = [
  { label: 'Name', id: 'name' },
  { label: 'Customer', id: 'customer.firstName' },
  { label: 'Status', id: 'status' },
  { label: 'Scope', id: 'scope' },
  { label: 'date', id: 'date' },
];

function Results({ className, query, setquery, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [OpenDeleteDialoge, setOpenDeleteDialoge] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState({});
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const [showdate, setShowdate] = React.useState({});
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
    // setItems,
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
    getValues,
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
                  setSelected={setShowdate}
                  label="Filter"
                  variant="outlined"
                  setValue={setValue}
                  value={getValues('filter')}
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
              {showdate.value == 'date' ? (
                <>
                  <Grid item container spacing={3} md={6} xs={12}>
                    <Grid item md={6}>
                      <FormDatePicker
                        name="startDate"
                        label="From"
                        variant="blocked"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <FormDatePicker
                        name="endDate"
                        label="To"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </>
              ) : (
                <></>
              )}
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
                  <TableCell>Customer</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Scope</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Total</TableCell>
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
                      <>
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
                          <TableCell>{item.name}</TableCell>
                          <TableCell>
                            {item.customer.firstName} {item.customer.lastName}
                          </TableCell>

                          {/* <TableCell>{getStatusLabel(item.status)}</TableCell> */}

                          <TableCell>{item.status}</TableCell>

                          <TableCell>{item.project_scope.scope}</TableCell>
                          <TableCell>{item.startDate}</TableCell>
                          <TableCell>{item.endDate}</TableCell>
                          <TableCell>
                            {item.grandTotal}
                            {' EGP'}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              onClick={() =>
                                handelDialog({ id: item.id, name: item.name })
                              }>
                              <SvgIcon fontSize="small">
                                <TrashIcon />
                              </SvgIcon>
                            </IconButton>
                            <IconButton
                              component={Link}
                              href={`/projects/${item.id}/edit`}>
                              <SvgIcon fontSize="small">
                                <EditIcon />
                              </SvgIcon>
                            </IconButton>
                            <IconButton
                              component={Link}
                              href={`/projects/${item.id}`}>
                              <SvgIcon fontSize="small">
                                <ArrowRightIcon />
                              </SvgIcon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </>
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
          runFunction={deleteProject}
        />
      </Dialog>
    </div>
  );

  async function resetFilter() {
    try {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/projects?_where[isDeleted]=0`,
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
  async function onSubmit({ filter, search, startDate, endDate }) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };
      if (filter.id == 'date') {
        var fromDate = moment(startDate).format('YYYY-MM-DD');

        var toDate = moment(endDate).format('YYYY-MM-DD');
        //request filter by date here
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKENDURL}/projects?_where[startDate_gte]=${fromDate}&[startDate_lte]=${toDate}&[isDeleted]=0`,
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
      } else {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKENDURL}/projects?_where[${filter.id}]=${search}&[isDeleted]=0`,
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
      }
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

  function handelDialog(project) {
    setOpenDeleteDialoge(true);
    setDeleteItem(project);
  }

  async function deleteProject() {
    axios
      .put(`${process.env.NEXT_PUBLIC_BACKENDURL}/projects/${deleteItem.id}`, {
        isDeleted: 1,
      })
      .then((deletedItem) => {
        setquery(query.filter((item) => item.id != deleteItem.id));
      });
  }
}

export default Results;
