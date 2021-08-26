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
import axios from 'axios';

import useTable from 'src/hooks/useTable';

const useStyles = makeStyles(() => ({
  root: {},
}));

const validationSchema = yup.object().shape({});

function Results({ className, supplier, query, currency, ...rest }) {
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

  // const items = [
  //   {
  //     id: 1,
  //     partNo: '123456',
  //     name: 'Product 1',
  //     description: 'Product Description 1',
  //     price: '100',
  //     discount: '5',
  //   },
  //   {
  //     id: 2,
  //     partNo: '789101',
  //     name: 'Product 2',
  //     description: 'Product Description 2',
  //     price: '30',
  //     discount: '10',
  //   },
  //   {
  //     id: 3,
  //     partNo: '65489',
  //     name: 'Product 3',
  //     description: 'Product Description 3',
  //     price: '12',
  //     discount: '3',
  //   },
  // ];
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
                      <TableCell>Price (EGP)</TableCell>
                      <TableCell>Discount (%)</TableCell>
                    </TableRow>
                  </TableHead>
                  {isTableLoading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <TableBody>
                      {query.map((item) => {
                        return (
                          <TableRow hover key={item.partNumber}>
                            <TableCell>{item.partNumber}</TableCell>
                            <TableCell>{item.partName}</TableCell>
                            <TableCell>{item.desc}</TableCell>
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
                if (query.length == 0) return '0-0';
                return `${from}-${from + query.length - 1}`;
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
  async function onSubmit() {
    try {
      const newProducts = query.map((item) => {
        return {
          ...item,
          supplier: supplier.id,
          currency: currency.id,
          isActive: 1,
        };
      });
      // check first if item exsists ( part Number && supplier id)
      // if exsists => insert it into expire product table - add the new item
      // if not exsist => add it directly
      // to check for out of stock products => get all product from the supplier and compare it with the new list
      // ... the one which not exsist on the new one is consider expired
      //////////////////////////////////////////////////////////////////////////////////
      //check item if exsist
      const updateIsActive = { isActive: 0 };
      await Promise.all(
        newProducts.map(async (newproduct) => {
          await axios
            .get(
              `${process.env.NEXT_PUBLIC_BACKENDURL}/products?_where[supplier]=${supplier.id}&[partNumber]=${newproduct.partNumber}&[isDelted]=0&_limit=-1`,
            )
            .then(async (checkExsistResponse) => {
              if (checkExsistResponse.data.length == 0) {
                const addnewPart = await axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BACKENDURL}/products/`,
                    newproduct,
                  )
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                // change is active to exsist parts to 0
                await axios
                  .put(
                    `${process.env.NEXT_PUBLIC_BACKENDURL}/products/${checkExsistResponse.data[0].id}`,
                    updateIsActive,
                  )
                  // archive all exsistence product
                  .then(async (toArchivePart) => {
                    const archiveInput = {
                      partNumber: toArchivePart.data.partNumber,
                      partName: toArchivePart.data.partName,
                      brand: toArchivePart.data.brand,
                      price: toArchivePart.data.price,
                      currency: toArchivePart.data.currency.id,
                      supplier: toArchivePart.data.supplier.id,
                      discount: toArchivePart.data.discount,
                    };
                    await axios
                      .post(
                        `${process.env.NEXT_PUBLIC_BACKENDURL}/products-archives/`,
                        archiveInput,
                      )
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                // update the product with the new info
                const updatedparts = await axios
                  .put(
                    `${process.env.NEXT_PUBLIC_BACKENDURL}/products/${checkExsistResponse.data[0].id}`,
                    newproduct,
                  )
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err, 'error in catch  if product exsist');
            });
        }),
      );

      //// check for any remaning items not updated in the new pricelist
      await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_BACKENDURL
          }/products/?_where[isActive]=${0}&[supplier]=${
            supplier.id
          }&[isDeleted]=0&_limit=-1`,
        )
        .then(async (remaningItems) => {
          if (remaningItems.data.length != 0) {
            Promise.all(
              remaningItems.data.map(async (item) => {
                const archiveInput = {
                  partNumber: item.data.partNumber,
                  partName: item.data.partName,
                  brand: item.data.brand,
                  price: item.data.price,
                  currency: item.data.currency.id,
                  supplier: item.data.supplier.id,
                  discount: item.data.discount,
                };
                await axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BACKENDURL}/products-archives/`,
                    archiveInput,
                  )
                  .catch((err) => {
                    console.log(err);
                  });
                await axios
                  .put(
                    `${process.env.NEXT_PUBLIC_BACKENDURL}/products/${item.id}`,
                    {
                      isActive: 0,
                      isDeleted: 1,
                    },
                  )
                  .catch((err) => {
                    console.log(err);
                  });
              }),
            );
          }
        });

      enqueueSnackbar('Product created successfully.', { variant: 'success' });
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new product.', { variant: 'error' });
      console.log(err);

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new product.',
      });
    }
  }
}

export default Results;
