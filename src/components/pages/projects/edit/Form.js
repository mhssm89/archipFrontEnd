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
import { useRouter } from 'next/router';
import FormAutocomplete from 'src/components/controls/FormAutocomplete';
import FormDatePicker from 'src/components/controls/FormDatePicker';
import FormInput from 'src/components/controls/FormInput';
import CustomerAutoCompelete from 'src/components/controls/CustomerAutoCompelete';
import PoqAutoComplete from 'src/components/controls/PoqAutocomplete';
import ProductAutoComplete from 'src/components/controls/ProductAutoCompelete';
import axios from 'axios';
import ProjectScopeAuto from '../../../controls/ProjectScopeAutoComplete';
import Results from './Results';

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

const projectStatus = [
  { label: 'Negotiation', value: 'Negotiation' },
  { label: 'Signed', value: 'Signed' },
  { label: 'Inprogress', value: 'Inprogress' },
  { label: 'Finished', value: 'Finished' },
];

const validationSchema = yup.object().shape({
  projectName: yup.string().max(255).required('Required.'),
  customerName: yup
    .object()
    .shape({
      id: yup.number().nullable(),
      name: yup.string().nullable(),
    })
    .nullable()
    .required('Cutomer name is required'),

  poqNumber: yup
    .object()
    .shape({
      id: yup.number().nullable,
      name: yup.string().nullable(),
      customer: yup.string().nullable(),
      customerId: yup.number().nullable(),
      grandtotal: yup.number().nullable(),
    })
    .nullable()
    .required('BOQ name is required'),
  scope: yup.object().nullable().required('Project scope is required'),
  status: yup
    .object()
    .shape({
      lable: yup.string().nullable(),
      value: yup.string().nullable(),
    })
    .nullable()
    .required('Project status is required'),
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
  shippingCost: yup.number().nullable(),
  otherCosts: yup.number(),
  totaldiscount: yup.number(),
  vatpercentage: yup.number(),
  productQty: yup.number().nullable(),
  productName: yup
    .object()
    .shape({ id: yup.number().nullable(), name: yup.string().nullable() })
    .nullable(),
  downPayment: yup.number().required('Required.'),
  upponSupply: yup.number().required('Required.'),
  upponComission: yup.number().required('Required.'),
  dollar: yup.number().nullable(),
  euro: yup.number().nullable(),
  software: yup.number().nullable(),
});

function Form({ className, project, setproject, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [productsCost, setProductsCost] = React.useState(
    project.project.productTotalCost,
  );

  const [calculation, setCalculation] = React.useState({
    subtotal: project.project.subtotal,
    totalvat: (project.project.vat * project.project.subtotal) / 100,
    grandTotal:
      project.project.subtotal +
      (project.project.vat * project.project.subtotal) / 100,
  });
  const [enablecreate, setEnableCreate] = React.useState(false);
  const [transferRate, setTransferRate] = React.useState({
    usd: project.project.dollarTransferRate,
    eur: project.project.euroTransferRate,
  });
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      projectName: project.project.name || '',
      poqNumber:
        {
          id: project.project.poq.id,
          name: project.project.poq.Name,
          // customer: `${project.project.customer.firstName} ${project.project.customer.lastName}`,
          // customerId: project.project.customer.id,
          // grandtotal: project.project.grandTotal,
        } || null,
      customerName:
        {
          id: project.project.customer.id,
          name: `${project.project.customer.firstName} ${project.project.customer.lastName} `,
        } || null,
      status:
        { label: project.project.status, value: project.project.status } || '',
      scope:
        {
          id: project.project.project_scope.id,
          name: project.project.project_scope.scope,
        } || '',
      startDate: project.project.startDate || new Date(),
      endDate: project.project.endDate || new Date(),
      shippingAddress: project.project.shippingAddress || '',
      shippingCost: project.project.shippingcost || 0,
      otherCosts: project.project.othercost || 0,
      totaldiscount: project.project.totalDiscount || 0,
      vatpercentage: project.project.vat || 0,
      productQty: 1,
      productName: null,
      downPayment: project.project.downPayment || 60,
      upponSupply: project.project.upponSupply || 30,
      upponComission: project.project.upponComission || 10,
      dollar: project.project.dollarTransferRate || 1,
      euro: project.project.euroTransferRate || 1,
      software: project.project.software,
      submitError: '',
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
    project.projectdetail.forEach((element) => {
      if (element.currency == 2) {
        itemproductcost += element.SalePrice * transferRate.usd * element.qnty;
      }
      if (element.currency == 3) {
        itemproductcost += element.SalePrice * transferRate.eur * element.qnty;
      } else {
        itemproductcost += element.SalePrice * element.qnty;
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

  React.useEffect(() => {
    // loadcproduct();
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
                  {/* Project name # */}
                  <Grid item xs={12} md={12}>
                    <FormInput
                      name="projectName"
                      label="Project Name"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* Customer name */}
                  <Grid item md={12} xs={12}>
                    <CustomerAutoCompelete
                      name="customerName"
                      label="Customer"
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* POQ number */}
                  <Grid item md={12} xs={12}>
                    <PoqAutoComplete
                      name="poqNumber"
                      label="B.O.Q #"
                      variant="outlined"
                      disabled={true}
                      errorObj={errors}
                    />
                  </Grid>
                  {/* project status */}
                  <Grid item md={12} xs={12}>
                    <FormAutocomplete
                      name="status"
                      label="Project Status"
                      options={projectStatus}
                      variant="outlined"
                      errorObj={errors}
                    />
                  </Grid>
                  {/* project scope */}
                  <Grid item md={12} xs={12}>
                    <ProjectScopeAuto
                      name="scope"
                      label="Project Scope"
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
                <CardHeader title="Software" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <FormInput
                        name="software"
                        label="Software development"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            {/* Costs */}
            <Box mt={3}>
              <Card>
                <CardHeader title="Others" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    {/* Cost */}
                    <Grid item xs={12} md={12}>
                      {/* Shipping Cost */}
                      <FormInput
                        name="shippingCost"
                        label="Shipping Cost"
                        type="number"
                        variant="outlined"
                        errorObj={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {/* Other Costs */}
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
                      <Typography>Softeware Dev. cost : </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {getValues().software
                          ? Number(getValues().software)
                          : '0'}
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
                          : project.project.shippingcost +
                            project.project.othercost}
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
                        {calculation.grandTotal & getValues().upponSupply
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
                        {calculation.grandTotal & getValues().upponSupply
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
                      <Typography>Uppon comission</Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography>
                        {calculation.grandTotal & getValues().upponComission
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
                    query={project}
                    setproject={setproject}
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
              disabled={isSubmitting}>
              Save
            </Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );

  async function addproduct() {
    if (!getValues().productName) return;

    const newProduct = {
      project: project.project.id,
      product: getValues().productName.id,
      qnty: Number(getValues().productQty),
      EndUserPrice: getValues().productName.price,
      SalePrice: (() => {
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
        `${process.env.NEXT_PUBLIC_BACKENDURL}/project-details?_where[product]=${newProduct.product}&[project]=${newProduct.project}`,
      )
      .then(async (res) => {
        if (res.data.length === 0) {
          const resp = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKENDURL}/project-details`,
            newProduct,
          );
          setproject({
            ...project,
            projectdetail: [...project.projectdetail, resp.data],
          });
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
      console.log(values);
      // Reset submitError message
      // setValue('submitError', '');
      // const projectInput = {
      //   name: values.projectName,
      //   customer: values.customerName.id,
      //   poq: values.poqNumber.id,
      //   status: values.status.label,
      //   project_scope: values.scope.id,
      //   sartDate: values.startDate,
      //   endDate: values.endDate,
      //   grandTotal: calculation.grandTotal,
      //   downPayment: values.downPayment,
      //   upponSupply: values.upponSupply,
      //   upponComission: values.upponComission,
      //   dollarTransferRate: transferRate.usd,
      //   euroTransferRate: transferRate.eur,
      //   software : values.software ,
      // };
      // console.log(projectInput);
      // const response = axios
      //   .put(
      //     `http://localhost:1337/projects/${project.project.id}`,
      //     projectInput,
      //   )
      //   .then((res) => {
      //     Promise.all(
      //       project.projectdetail.map(async (item) => {
      //         const projectDetailInput = {
      //           project: project.project.id,
      //           product: item.product.id,
      //           qnty: item.qnty,
      //           EndUserPrice: item.product.price,
      //           SalePrice: item.saleprice,
      //           saleprecentage: item.saleprecentage ? item.saleprecentage : 0,
      //           transferRate: (() => {
      //             if (item.currency == 2) {
      //               return transferRate.usd;
      //             }
      //             if (item.currency == 3) {
      //               return transferRate.eur;
      //             } else return 1;
      //           })(),
      //         };
      //         const detailresponse = await axios.put(
      //           `http://localhost:1337/project-details/${item.id}`,
      //           projectDetailInput,
      //         );
      //       }),
      //     );
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // enqueueSnackbar(`project edit successfully.${projectInput}`, {
      //   variant: 'success',
      // });
      // reset();
      // Show success message
    } catch (err) {
      // Show error message
      console.log(err);
      enqueueSnackbar('Error edit Project', { variant: 'error' });

      // Show submitError message
      setError('submitError', {
        type: 'submit',
        message: 'Error edit project',
      });
    }
  }
}

export default Form;
