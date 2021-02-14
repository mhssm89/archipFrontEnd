import React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  colors,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import CircularProgress from './CircularProgress';

const PRODUCTS = [
  {
    id: '5eff2512c6f8737d08325676',
    conversionRate: 93,
    currency: '$',
    image: '/static/images/products/product_standard.svg',
    name: 'Freelancer Basic Subscription',
    price: 5.0,
    subscriptions: 13153,
  },
  {
    id: '5eff2516247f9a6fcca9f151',
    conversionRate: 76,
    currency: '$',
    image: '/static/images/products/product_standard.svg',
    name: 'Freelancer Extra Subscription',
    price: 15.0,
    subscriptions: 10300,
  },
  {
    id: '5eff251a3bb9ab7290640f18',
    conversionRate: 60,
    currency: '$',
    image: '/static/images/products/product_premium.svg',
    name: 'Agency Basic Subscription',
    price: 25.0,
    subscriptions: 5300,
  },
  {
    id: '5eff251e297fd17f0dc18a8b',
    conversionRate: 46,
    currency: '$',
    image: '/static/images/products/product_extended.svg',
    name: 'Enterprise Basic Subscription',
    price: 205.0,
    subscriptions: 1203,
  },
  {
    id: '5eff2524ef813f061b3ea39f',
    conversionRate: 41,
    currency: '$',
    image: '/static/images/products/product_extended.svg',
    name: 'Enterprise Extra Subscription',
    price: 500.0,
    subscriptions: 254,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    flexShrink: 0,
    height: 56,
    width: 56,
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function MostProfitableProducts({ className, ...rest }) {
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
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Most Profitable Products"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableBody>
              {products.map((product) => (
                <TableRow hover key={product.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <img
                        alt="Product"
                        className={classes.image}
                        src={product.image}
                      />
                      <Box ml={2}>
                        <Typography variant="h6" color="textPrimary">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <span className={classes.subscriptions}>
                            {numeral(product.subscriptions).format('0,0')}
                          </span>{' '}
                          Active
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="textPrimary">
                      Price
                    </Typography>
                    <Typography noWrap variant="body2" color="textSecondary">
                      <span className={classes.value}>
                        {numeral(product.price).format(
                          `${product.currency}0,0.00`,
                        )}
                      </span>{' '}
                      monthly
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end">
                      <Box mr={2}>
                        <Typography
                          align="right"
                          variant="h6"
                          color="textPrimary">
                          {product.conversionRate}%
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Conversion Rate
                        </Typography>
                      </Box>
                      <CircularProgress value={product.conversionRate} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={Link}
          size="small"
          href="#"
          endIcon={<NavigateNextIcon />}>
          See all
        </Button>
      </Box>
    </Card>
  );
}

export default MostProfitableProducts;
