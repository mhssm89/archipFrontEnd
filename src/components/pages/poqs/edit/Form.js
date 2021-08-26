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
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Plus as PlusIcon } from 'react-feather';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import CustomerAutoComplete from 'src/components/controls/CustomerAutoCompelete';
import ProductAutoComplete from 'src/components/controls/ProductAutoCompelete';
import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';
import axios from 'axios';
import Results from './Results';
import { Router } from '@/root/i18n';

const useStyles = makeStyles((theme) => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400,
    },
  },
  addProduct: {
    marginLeft: theme.spacing(2),
  },
}));

const validationSchema = yup.object().shape({
  poqname: yup.string(),
  customerName: yup
    .object()
    .shape({
      id: yup.number().nullable(),
      name: yup.string().nullable(),
    })
    .nullable()
    .required('Cutomer name is required'),
  startDate: yup
    .date()
    .nullable()
    .typeError('Invalid date.')
    .required('Required.'),
  endDate: yup
    .date()
    .nullable()
    .typeError('Invalid date.')
    .required('Required.'),
  shippingAddress: yup.string().max(255),
  shippingCost: yup.number(),
  otherCosts: yup.number(),
  totaldiscount: yup.number(),
  vatpercentage: yup.number(),
  productName: yup
    .object()
    .shape({ id: yup.number(), name: yup.string() })
    .nullable(),
  productQty: yup.number().nullable(),
  downPayment: yup.number().required('Required.'),
  upponSupply: yup.number().required('Required.'),
  upponComission: yup.number().required('Required.'),
  dollar: yup.number().nullable(),
  euro: yup.number().nullable(),
});

function Form({ className, poq, setPOQ, ...rest }) {
  console.log(poq);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [productsCost, setProductsCost] = React.useState(
    poq.poq.productTotalcost,
  );
  const [calculation, setCalculation] = React.useState({
    subtotal: poq.poq.subtotal,
    totalvat: (poq.poq.vat * poq.poq.subtotal) / 100,
    grandTotal: poq.poq.subtotal + (poq.poq.vat * poq.poq.subtotal) / 100,
  });
  const [enablecreate, setEnableCreate] = React.useState(false);
  const [transferRate, setTransferRate] = React.useState({
    usd: poq.poq.dollarTransferRate,
    eur: poq.poq.euroTransferRate,
  });

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      poqname: poq.poq.Name || '',
      customerName:
        {
          id: poq.poq.customer.id,
          name: `${poq.poq.customer.firstName} ${poq.poq.customer.lastName}`,
        } || null,
      startDate: poq.poq.startDate || new Date(),
      endDate: poq.poq.endDate || new Date(),
      shippingAddress: poq.poq.shippingAddress || '',
      shippingCost: poq.poq.shippingCost || 0,
      otherCosts: poq.poq.otherCost || 0,
      totaldiscount: poq.poq.totalDiscount || 0,
      productName: null,
      vatpercentage: poq.poq.vat || 0,
      productQty: 1,
      submitError: '',
      downPayment: poq.poq.downPayment || 60,
      upponSupply: poq.poq.upponSupply || 30,
      upponComission: poq.poq.upponComission || 10,
      dollar: poq.poq.dollarTransferRate || 1,
      euro: poq.poq.euroTransferRate || 1,
    },
  });
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    getValues,
    reset,
    formState: { isSubmitting },
  } = methods;

  function handelCalculate() {
    let itemproductcost = 0;
    poq.poqDetail.forEach((element) => {
      if (element.currency == 2) {
        //2 is USD index in curreny table
        itemproductcost += element.saleprice * transferRate.usd * element.qnty;
      }
      if (element.currency == 3) {
        //3 is USD index in curreny table
        itemproductcost += element.saleprice * transferRate.eur * element.qnty;
      } else {
        itemproductcost += element.saleprice * element.qnty;
      }
    });
    setProductsCost(itemproductcost);
    var subtotal =
      itemproductcost +
      Number(getValues().otherCosts) +
      Number(getValues().shippingCost) -
      Number(getValues().totaldiscount);
    var totalvat = (subtotal * getValues().vatpercentage) / 100;
    var grandTotal = subtotal + totalvat;
    setCalculation({ subtotal, totalvat, grandTotal });
  }

  // function productsTotalCost() {
  //   let productsCostHH = 0;
  //   poq.poqDetail.map((item) => {
  //     const itemprice = item.saleprice * item.qnty;
  //     productsCostHH += itemprice;
  //   });

  //   return productsCostHH;
  // }

  React.useEffect(() => {
    // productsTotalCost();
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            {/* Basic */}
            <Card>
              <CardHeader title="Basic" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {/* Number # */}
                  <Grid item xs={12} md={12}>
                    <FormInput
                      name="poqname"
                      label="BOQ Number"
                      variant="outlined"
                      disabled={true}
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Customer name */}
                  <Grid item md={12} xs={12}>
                    <CustomerAutoComplete
                      name="customerName"
                      label="Customer"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Start Date */}
                  <Grid item md={6} xs={12}>
                    <FormDatePicker
                      name="startDate"
                      label="Start Date"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* End Date */}
                  <Grid item md={6} xs={12}>
                    <FormDatePicker
                      name="endDate"
                      label="End Date"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Shipping Address */}
                  <Grid item md={12} xs={12}>
                    <FormInput
                      name="shippingAddress"
                      label="Shipping Address"
                      variant="outlined"
                      multiline
                      rows={2}
                      errorObj={errors}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Box mt={3}>
              <Card>
                <CardHeader title="Others" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <FormInput
                        name="shippingCost"
                        label="Shipping Cost"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormInput
                        name="otherCosts"
                        label="Design - Installation - Documentation"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormInput
                        name="totaldiscount"
                        label="Total discount amount"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}></Grid>

                    <Grid item xs={6} md={6}>
                      <FormInput
                        name="vatpercentage"
                        label="VAT %"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      xs={6}
                      md={6}
                      alignItems="center"></Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Box mt={3}>
                <Card>
                  <CardHeader title="Total" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6}>
                        <Typography>Net products cost : </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>
                          {Math.round((productsCost + Number.EPSILON) * 100) /
                            100}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>Shipping and Installation : </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>
                          {getValues().otherCosts
                            ? Number(getValues().otherCosts) +
                              Number(getValues().shippingCost)
                            : poq.poq.shippingCost + poq.poq.otherCost}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>Sub Total : </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>
                          {Math.round(
                            (calculation.subtotal + Number.EPSILON) * 100,
                          ) / 100}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>Taxes : </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography name="vat">
                          {Math.round(
                            (calculation.totalvat + Number.EPSILON) * 100,
                          ) / 100}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography>Grand total : </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography name="grandtotal">
                          {Math.round(
                            (calculation.grandTotal + Number.EPSILON) * 100,
                          ) / 100}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            {/* payment terms */}
            <Box mt={3}>
              <Card>
                <CardHeader title="Payment Terms" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <FormInput
                        name="downPayment"
                        label=" Down payment %"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormInput
                        name="upponSupply"
                        label=" Uppon Supply %"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormInput
                        name="upponComission"
                        label=" Uppon Comission %"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Down Payment Amount : </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.grandTotal && getValues().downPayment
                          ? Math.round(
                              (calculation.grandTotal *
                                getValues().downPayment +
                                Number.EPSILON) *
                                100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Uppon Supply amount : </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.grandTotal && getValues().upponSupply
                          ? Math.round(
                              (calculation.grandTotal *
                                getValues().upponSupply +
                                Number.EPSILON) *
                                100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Uppon comission amount :</Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.grandTotal && getValues().upponComission
                          ? Math.round(
                              (calculation.grandTotal *
                                getValues().upponComission +
                                Number.EPSILON) *
                                100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={8}>
                      <Button
                        variant="contained"
                        color="secondary"
                        type="button"
                        onClick={() => {
                          setEnableCreate(true);
                          handelCalculate();
                        }}
                        className={classes.calcButton}>
                        Calculate
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Products */}
          <Grid item xs={12} lg={8}>
            <Grid xs={12}>
              <Card>
                <CardHeader title="Transfer Rates" />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={6}>
                      {/* Product Name */}
                      <FormInput
                        name="dollar"
                        label="USD"
                        type="number"
                        variant="outlined"
                        onChange={(e) => {
                          setTransferRate({
                            ...transferRate,
                            usd: Number(e.target.value),
                          });
                        }}
                        errorObj={errors}
                      />
                    </Grid>
                    {/* Quantity */}
                    <Grid item md={6} xs={6}>
                      <FormInput
                        name="euro"
                        label="EUR"
                        type="number"
                        variant="outlined"
                        onChange={(e) => {
                          setTransferRate({
                            ...transferRate,
                            eur: Number(e.target.value),
                          });
                        }}
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Card>
              <CardHeader title="Products" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={12}>
                    {/* Product Name */}
                    <ProductAutoComplete
                      name="productName"
                      label="Product"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Quantity */}
                  <Grid item md={2} xs={12}>
                    <FormInput
                      name="productQty"
                      label="Quantity"
                      type="number"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  <Grid item md={1} xs={12} alignItems="center">
                    {/* Add Button */}
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        setEnableCreate(false);
                        addproduct();
                      }}>
                      <SvgIcon fontSize="large">
                        <PlusIcon />
                      </SvgIcon>
                    </IconButton>
                  </Grid>
                </Grid>
                {/* Products Table */}
                <Box mt={2}>
                  <Results
                    query={poq}
                    setPOQ={setPOQ}
                    transferRate={transferRate}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Error */}
        {errors.submitError && (
          <Box mt={1} display="flex" justifyContent="center">
            <FormHelperText style={{ fontSize: '24px' }} error>
              {errors.submitError.message}
            </FormHelperText>
          </Box>
        )}

        <Box mt={5}>
          {/* Submit */}
          {isSubmitting ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!enablecreate}>
              Edit
            </Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );
  async function addproduct() {
    if (!getValues().productName) return;
    const newProduct = {
      poq: poq.poq.id,
      product: getValues().productName.id,
      qnty: Number(getValues().productQty),
      enduserprice: getValues().productName.price,
      saleprice: (() => {
        switch (Number(getValues().productName.currency.id)) {
          case 1:
            return getValues().productName.price;
          case 2:
            return getValues().productName.price * transferRate.usd;
          case 3:
            return getValues().productName.price * transferRate.eur;
        }
      })(),
    };
    axios
      .get(
        `http://localhost:1337/poqdetails?_where[product]=${newProduct.product}&[poq]=${newProduct.poq}`,
      )
      .then(async (res) => {
        if (res.data.length === 0) {
          const resp = await axios.post(
            'http://localhost:1337/poqdetails',
            newProduct,
          );

          setPOQ({ ...poq, poqDetail: [...poq.poqDetail, resp.data] });

          setValue('productName', {});
          setValue('productQty', 0);
        } else {
          enqueueSnackbar('Part already exsists', { variant: 'error' });
        }
      });
  }
  // ##################################################

  async function onSubmit(values) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const poqInput = {
        Name: values.poqname,
        customer: values.customerName.id,
        shippingAddress: values.shippingAddress,
        startDate: values.startDate,
        endDate: values.endDate,
        shippingCost: values.shippingCost,
        otherCost: values.otherCosts,
        subtotal: calculation.subtotal,
        grandTotal: calculation.grandTotal,
        totalDiscount: values.totaldiscount,
        vat: values.vatpercentage,
        downPayment: values.downPayment,
        upponSupply: values.upponSupply,
        upponComission: values.upponComission,
        dollarTransferRate: transferRate.usd,
        euroTransferRate: transferRate.eur,
      };
      const response = axios
        .put(`http://localhost:1337/poqs/${poq.poq.id}`, poqInput)
        .then((res) => {
          Promise.all(
            poq.poqDetail.map(async (item) => {
              const detailimput = {
                poq: poq.poq.id,
                product: item.product.id,
                qnty: item.qnty,
                enduserprice: item.product.price,
                saleprice: item.saleprice,
                salepercentage: item.salepercentage ? item.salepercentage : 0,
                transferRate: (() => {
                  if (item.currency == 2) {
                    return transferRate.usd;
                  }
                  if (item.currency == 3) {
                    return transferRate.eur;
                  } else return 1;
                })(),
              };
              const detailresp = await axios.put(
                `http://localhost:1337/poqdetails/${item.id}`,
                detailimput,
              );
            }),
          );
        });

      // Show success message
      enqueueSnackbar('Edit successfully done', { variant: 'success' });
      reset();
      Router.push('/poqs');
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error edit Qutation', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error edit Qutation',
      });
    }
  }
}

export default Form;
