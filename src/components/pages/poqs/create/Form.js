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
  TextField,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Plus as PlusIcon, Watch } from 'react-feather';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';
import CustomerAutoComplete from 'src/components/controls/CustomerAutoCompelete';
import ProductAutoComplete from 'src/components/controls/ProductAutoCompelete';
import AutoGenrate from 'generate-serial-number';
import Results from './Results';
import axios from 'axios';

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
  calcButton: {
    width: '85%',
  },
}));

const validationSchema = yup.object().shape({
  //poqname: yup.string().required('Required.'),
  customerName: yup.object().nullable().required('Required.'),
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
  productName: yup.object().shape({ id: yup.number(), name: yup.string() }),
  productQty: yup.number(),
  downPayment: yup.number().required('Required.'),
  upponSupply: yup.number().required('Required.'),
  upponComission: yup.number().required('Required.'),
  dollar: yup.number().nullable(),
  euro: yup.number().nullable(),
});

function Form({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [product, setProduct] = React.useState([]);
  const [calculation, setCalculation] = React.useState({});
  const [productsCost, setProductsCost] = React.useState(0);
  // const [customerData, setCustomerData] = React.useState(null);
  const [profite, setProfite] = React.useState(0);

  const [enablecreate, setEnableCreate] = React.useState(false);
  const [transferRate, setTransferRate] = React.useState({ usd: 1, eur: 1 });
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      //poqname: `${AutoGenrate.generate(5)}-Archip`,
      customerName: null,
      startDate: new Date(),
      endDate: moment().add(7, 'days'),
      shippingAddress: '',
      shippingCost: 0,
      otherCosts: 0,
      totaldiscount: 0,
      submitError: '',
      productName: null,
      vatpercentage: 14,
      productQty: 1,
      downPayment: 60,
      upponSupply: 30,
      upponComission: 10,
    },
  });
  // console.log(customerData);
  const {
    handleSubmit,
    errors,
    setError,
    setValue,
    getValues,
    reset,
    watch,
    formState: { isSubmitting },
  } = methods;

  const user = JSON.parse(localStorage.getItem('user'));
  if (user.role.id == '1') {
    console.log('1');
  } else {
    console.log('else');
  }
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
                  {/* Customer name */}
                  <Grid item md={12} xs={12}>
                    <CustomerAutoComplete
                      name="customerName"
                      label="Customer"
                      variant="outlined"
                      errorObj={errors}
                      setCustomerAddress={setValue}
                    />
                  </Grid>
                  {/* Start Date */}
                  <Grid item md={6} xs={12}>
                    <FormDatePicker
                      name="startDate"
                      label="Start Date"
                      variant="outlined"
                      errorObj={errors}
                      disabled={true}
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
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            <Box mt={3}>
              <Card>
                <CardHeader title="Taxes" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6} md={8}>
                      <FormInput
                        name="vatpercentage"
                        label="VAT %"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>

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
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Sub Total : </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.subtotal
                          ? Math.round(
                              (calculation.subtotal + Number.EPSILON) * 100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Taxes : </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography name="vat">
                        {calculation.totalvat
                          ? Math.round(
                              (calculation.totalvat + Number.EPSILON) * 100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>Grand total : </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography name="grandtotal">
                        {calculation.grandTotal
                          ? Math.round(
                              (calculation.grandTotal + Number.EPSILON) * 100,
                            ) / 100
                          : '0'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
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
                        label=" Uppon Commission %"
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
                        {calculation.grandTotal
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
                        {calculation.grandTotal
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
                      <Typography>Uppon comission </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.grandTotal
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
                        errorObj={errors}
                        onChange={(e) => {
                          setTransferRate({
                            ...transferRate,
                            usd: Number(e.target.value),
                          });
                        }}
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
            <Card style={{ marginTop: '2%' }}>
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

                {/* ////////////////////////////////// */}

                <Box mt={2}>
                  <Results
                    query={product}
                    setproduct={setProduct}
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
              Create
            </Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );
  async function handelCalculate() {
    // HERE
    //setProduct([]);
    //setProductsCost(0);
    let myProductsCost = 0;
    product.forEach((item) => {
      //myProductsCost += item.saleprice * Number(item.qnty);

      //if (item.saleprice && item.flage) {
      if (item.currency['name'] === 'USD') {
        myProductsCost += item.saleprice * transferRate.usd * Number(item.qnty);
        //item.saleprice = item.price * transferRate.usd;
      }
      if (item.currency['name'] === 'EUR') {
        myProductsCost += item.saleprice * transferRate.eur * Number(item.qnty);
        //item.saleprice = item.price * transferRate.eur;
      }
      if (item.currency['name'] === 'EGP') {
        myProductsCost += item.saleprice * Number(item.qnty);
        //item.saleprice = item.price;
      }
      // }
      // else if (!item.saleprice && !item.flage) {
      //   if (item.currency['name'] === 'USD') {
      //     myProductsCost += item.price * transferRate.usd * Number(item.qnty);
      //     item.saleprice = item.price * transferRate.usd;
      //   }
      //   if (item.currency['name'] === 'EUR') {
      //     myProductsCost += item.price * transferRate.eur * Number(item.qnty);
      //     item.saleprice = item.price * transferRate.eur;
      //   }
      //   if (item.currency['name'] === 'EGP') {
      //     myProductsCost += item.price * transferRate.eur * Number(item.qnty);
      //     item.saleprice = item.price;
      //   }
      // }
    });

    setProductsCost(myProductsCost);

    var subtotal =
      myProductsCost +
      Number(getValues().otherCosts) +
      Number(getValues().shippingCost) -
      Number(getValues().totaldiscount);
    var totalvat = (subtotal * getValues().vatpercentage) / 100;
    var grandTotal = subtotal + totalvat;
    setCalculation({ subtotal, totalvat, grandTotal });

    // setProductsCost(
    //   (productsCost) =>
    //     productsCost + newProduct.price * Number(getValues('productQty')),
    // );
  }

  async function addproduct() {
    const newProduct = getValues().productName;
    setProduct([
      ...product,
      {
        ...newProduct,
        qnty: getValues('productQty'),
        saleprice: newProduct.price,
        // (() => {
        //   switch (Number(getValues().productName.currency.id)) {
        //     case 1:
        //       return getValues().productName.price;
        //     case 2:
        //       return getValues().productName.price * transferRate.usd;
        //     case 3:
        //       return getValues().productName.price * transferRate.eur;
        //   }
        // })(),
      },
    ]);

    // setProductsCost(
    //   (productsCost) =>
    //     productsCost + newProduct.price * Number(getValues('productQty')),
    // );
    // setProfite(
    //   (profite) =>
    //     profite +
    //     newProduct.saleprice * Number(getValues('productQty')) +
    //     Number(getValues().otherCosts),
    // );
  }

  // ##################################################
  async function onSubmit({
    customerName,
    shippingAddress,
    startDate,
    endDate,
    shippingCost,
    otherCosts,
    totaldiscount,
    vatpercentage,
    downPayment,
    upponSupply,
    upponComission,
  }) {
    try {
      // Reset submitError message
      setValue('submitError', '');
      const poqInput = {
        customer: customerName.id,
        shippingAddress: shippingAddress,
        startDate: startDate,
        endDate: endDate,
        shippingCost: shippingCost,
        otherCost: otherCosts,
        productTotalcost: productsCost,
        subtotal: calculation.subtotal,
        grandTotal: calculation.grandTotal,
        totalDiscount: totaldiscount,
        vat: vatpercentage,
        downPayment: downPayment,
        upponSupply: upponSupply,
        upponComission: upponComission,
        dollarTransferRate: transferRate.usd,
        euroTransferRate: transferRate.eur,
      };
      console.log(poqInput);

      const response = axios
        .post(`${process.env.NEXT_PUBLIC_BACKENDURL}/poqs`, poqInput)
        .then((res) => {
          const poqName = { Name: `${res.data.id}-Archip` };
          axios.put(
            `${process.env.NEXT_PUBLIC_BACKENDURL}/poqs/${res.data.id}`,
            poqName,
          );
          Promise.all(
            product.map(async (item) => {
              const detailinput = {
                poq: res.data.id,
                product: item.id,
                qnty: item.qnty,
                enduserprice: item.price,
                saleprice: (() => {
                  switch (item.currency.id) {
                    case 1:
                      return item.price;
                    case 2:
                      return item.price * transferRate.usd;
                    case 3:
                      return item.price * transferRate.eur;
                  }
                })(),
                salepercentage: item.salepercentage ? item.salepercentage : 0,
                transferRate: (() => {
                  if (item.currency['name'] == 'USD') {
                    return transferRate.usd;
                  }
                  if (item.currency['name'] == 'eur') {
                    return transferRate.eur;
                  } else return 1;
                })(),
              };
              console.log(detailinput);
              axios
                .post(
                  `${process.env.NEXT_PUBLIC_BACKENDURL}/poqdetails`,
                  detailinput,
                )
                .catch((err) => {
                  console.log(err);
                  enqueueSnackbar('Error creating new BOQ.', {
                    variant: 'error',
                  });
                });
            }),
          );
        });
      enqueueSnackbar('BOQ created successfully.', { variant: 'success' });
      reset();
      setProduct([]);
      setCalculation({});
      setProductsCost(0);
    } catch (err) {
      // Show error message
      enqueueSnackbar('Error creating new BOQ.', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error creating new BOQ.',
      });
    }
  }
}

export default Form;
