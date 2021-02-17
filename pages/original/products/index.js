import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/products/Header';
import Results from 'src/components/pages/products/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const PRODUCTS = [
  {
    id: '5ece2c077e39da27658aa8a9',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: moment().subtract(1, 'days').toDate().getTime(),
    image: null,
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Charlie Tulip Dress',
    price: 23.99,
    quantity: 85,
    updatedAt: moment().subtract(6, 'hours').toDate().getTime(),
    variants: 2,
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: moment().subtract(3, 'days').toDate().getTime(),
    image: null,
    inventoryType: 'out_of_stock',
    isAvailable: false,
    isShippable: true,
    name: 'Kate Leopard Dress',
    price: 95.0,
    quantity: 0,
    updatedAt: moment()
      .subtract(2, 'days')
      .subtract(8, 'hours')
      .toDate()
      .getTime(),
    variants: 1,
  },
  {
    id: '5ece2c123fad30cbbff8d060',
    attributes: ['Variety of styles'],
    category: 'jewelry',
    currency: '$',
    createdAt: moment().subtract(6, 'days').toDate().getTime(),
    image: null,
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Layering Bracelets Collection',
    price: 155.0,
    quantity: 48,
    updatedAt: moment()
      .subtract(1, 'days')
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
    variants: 5,
  },
  {
    id: '5ece2c1be7996d1549d94e34',
    attributes: ['Polyester and Spandex'],
    category: 'blouse',
    currency: '$',
    createdAt: moment().subtract(12, 'days').toDate().getTime(),
    image: null,
    inventoryType: 'limited',
    isAvailable: false,
    isShippable: true,
    name: 'Flared Sleeve Floral Blouse',
    price: 17.99,
    quantity: 5,
    updatedAt: moment()
      .subtract(1, 'days')
      .subtract(7, 'hours')
      .toDate()
      .getTime(),
    variants: 1,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100,
  },
}));

function ProductsPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [products, setProducts] = React.useState([]);

  const getProducts = React.useCallback(async () => {
    try {
      const data = { products: PRODUCTS };

      if (isMountedRef.current) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Page className={classes.root} title="Product List">
      <Container maxWidth={false}>
        <Header />
        {products && (
          <Box mt={3}>
            <Results products={products} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

ProductsPage.Guard = Protected;
ProductsPage.Layout = DashboardLayout;

export default ProductsPage;
