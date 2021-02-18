import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormHelperText,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import PerfectScrollbar from 'react-perfect-scrollbar';
import * as yup from 'yup';

import useTable from 'src/hooks/useTable';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({});

function Results({ className, query, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
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
      submitError: '',
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    reset,
    formState: { isSubmitting },
  } = methods;

  const items = [
    {
      id: 1,
      partNo: '123456',
      name: 'Product 1',
      description: 'Product Description 1',
      price: '100',
      discount: '5',
    },
    {
      id: 2,
      partNo: '789101',
      name: 'Product 2',
      description: 'Product Description 2',
      price: '30',
      discount: '10',
    },
    {
      id: 3,
      partNo: '65489',
      name: 'Product 3',
      description: 'Product Description 3',
      price: '12',
      discount: '3',
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}>
        <div className={clsx(classes.root, className)} {...rest}>
          <Card>
            <CardHeader title="Processed Products" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={700}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Part #</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Price (L.E)</TableCell>
                      <TableCell>Discount (%)</TableCell>
                    </TableRow>
                  </TableHead>
                  {isTableLoading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <TableBody>
                      {items.map((item) => {
                        return (
                          <TableRow hover key={item.id}>
                            <TableCell>{item.partNo}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.discount}</TableCell>
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

            <CardContent>
              {/* Error */}
              {errors.submitError && (
                <Box mt={1} display="flex" justifyContent="center">
                  <FormHelperText style={{ fontSize: '24px' }} error>
                    {errors.submitError.message}
                  </FormHelperText>
                </Box>
              )}

              <Box mt={5} display="flex" justifyContent="flex-end">
                {/* Submit */}
                {isSubmitting ? (
                  <CircularProgress />
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={isSubmitting}>
                    Upload
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </div>
      </form>
    </FormProvider>
  );

  // ##################################################
  async function onSubmit(values) {
    try {
      // Reset submitError message
      setValue('submitError', '');

      // Contsruct input
      // const input = {
      //   name,
      //   status: status ? 'ACTIVE' : 'INACTIVE',
      // };

      // Make an API request
      // await API.graphql({
      //   query: createProductClass,
      //   variables: { input },
      // });

      // Reset form
      reset();

      // Show success message
      enqueueSnackbar('Product created successfully.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new product.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new product.',
      });
    }
  }
}

export default Results;
