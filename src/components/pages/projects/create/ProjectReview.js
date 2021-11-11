import React from 'react';

import { Box, Button, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Results from 'src/components/pages/projects/create/Result';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {},

  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));
const validationSchema = yup.object().shape({});

function ProjectReview({
  className,
  projectData,
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const getProducts = React.useCallback(async () => {
    try {
      if (projectData) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/poqdetails?_where[poq]=${projectData.poq.id}`,
        );
        setProducts(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  });

  React.useEffect(() => {
    getProducts();
  }, []);

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const {
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
  } = methods;
  console.log(projectData);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(classes.root, className)}
        {...rest}>
        <Typography variant="h3" color="textPrimary">
          Project Review
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Please review all products attached to this project before save
        </Typography>
        <Results query={products} />

        <Box mt={6} display="flex">
          {onBack && (
            <Button onClick={onBack} size="large">
              Previous
            </Button>
          )}
          <Box flexGrow={1} />
          <Button
            color="secondary"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            size="large">
            Complete
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
  function onSubmit() {
    try {
      const projectInput = {
        name: projectData.project.projectName,
        startDate: projectData.project.startDate,
        endDate: projectData.project.endDate,
        status: projectData.project.projectStatus.value,
        project_scope: projectData.project.ProjectScope.id,
        customer: projectData.poq.customerId,
        poq: projectData.poq.id,
        grandTotal: projectData.poq.grandtotal,
        shippingaddress: projectData.poq.shippingAddress,
        shippingcost: projectData.poq.shippingcost,
        othercost: projectData.poq.othercost,
        vat: projectData.poq.vat,
        productTotalCost: projectData.poq.productTotalCost,
        subtotal: projectData.poq.subtotal,
        totalDiscount: projectData.poq.totaldiscount,
        profit: projectData.poq.profit,
        downPayment: projectData.poq.downPayment,
        upponSupply: projectData.poq.upponSupply,
        upponComission: projectData.poq.upponComission,
        dollarTransferRate: projectData.poq.dollarTransferRate,
        euroTransferRate: projectData.poq.euroTransferRate,
        software: projectData.poq.software,
      };

      axios
        .post(`${process.env.NEXT_PUBLIC_BACKENDURL}/projects`, projectInput)
        .then((resp) => {
          products.map((item) => {
            var projectDetails = {
              project: resp.data.id,
              product: item.product.id,
              qnty: item.qnty,
              EndUserPrice: item.enduserprice,
              SalePrice: item.saleprice,
              saleprecentage: item.salepercentage,
            };
            axios
              .post(
                `${process.env.NEXT_PUBLIC_BACKENDURL}/project-details`,
                projectDetails,
              )
              .catch(() => {
                enqueueSnackbar('Error creating new Project.', {
                  variant: 'error',
                });
              });
          });
          router.push('/projects');
          enqueueSnackbar('Project created successfully.', {
            variant: 'success',
          });
        });
    } catch (err) {
      console.error(err);
      setError('submitError', {
        type: 'submit',
        message: err.message,
      });
    }
  }
}

export default ProjectReview;
