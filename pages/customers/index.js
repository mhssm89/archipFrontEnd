import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Header from 'src/components/pages/customers/Header';
import Results from 'src/components/pages/customers/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const CUSTOMERS = [
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/images/avatars/avatar_3.png',
    city: 'Cleveland',
    country: 'USA',
    currency: '$',
    email: 'cao.yu@devias.io',
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: 'Cao Yu',
    state: 'Ohio',
    totalAmountSpent: 300.0,
    totalOrders: 3,
    updatedAt: moment()
      .subtract(1, 'days')
      .subtract(7, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/images/avatars/avatar_4.png',
    city: 'Atlanta',
    country: 'USA',
    currency: '$',
    email: 'alex.richardson@devias.io',
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: 'Alex Richardson',
    state: 'Georgia',
    totalAmountSpent: 0.0,
    totalOrders: 0,
    updatedAt: moment()
      .subtract(2, 'days')
      .subtract(1, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/static/images/avatars/avatar_5.png',
    city: 'North Canton',
    country: 'USA',
    currency: '$',
    email: 'anje.keizer@devias.io',
    hasAcceptedMarketing: false,
    isProspect: false,
    isReturning: false,
    name: 'Anje Keizer',
    state: 'Ohio',
    totalAmountSpent: 5600.0,
    totalOrders: 6,
    updatedAt: moment()
      .subtract(2, 'days')
      .subtract(4, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Madrid',
    country: 'Spain',
    currency: '$',
    email: 'katarina.smith@devias.io',
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: 'Katarina Smith',
    state: 'Madrid',
    totalAmountSpent: 500.0,
    totalOrders: 1,
    updatedAt: moment()
      .subtract(2, 'days')
      .subtract(11, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/images/avatars/avatar_7.png',
    city: 'San Diego',
    country: 'USA',
    currency: '$',
    email: 'adam.denisov@devias.io',
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: 'Adam Denisov',
    totalAmountSpent: 0.0,
    totalOrders: 0,
    state: 'California',
    updatedAt: moment()
      .subtract(3, 'days')
      .subtract(7, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/static/images/avatars/avatar_8.png',
    city: 'Berkeley',
    country: 'USA',
    currency: '$',
    email: 'miller.edwards@devias.io',
    hasAcceptedMarketing: false,
    isProspect: true,
    isReturning: false,
    name: 'Miller Edwards',
    state: 'California',
    totalAmountSpent: 0.0,
    totalOrders: 0,
    updatedAt: moment()
      .subtract(4, 'days')
      .subtract(5, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/static/images/avatars/avatar_9.png',
    currency: '$',
    email: 'emilee.simchenko@devias.io',
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: false,
    city: 'Carson City',
    country: 'USA',
    name: 'Emilee Simchenko',
    state: 'Nevada',
    totalAmountSpent: 100.0,
    totalOrders: 4,
    updatedAt: moment()
      .subtract(4, 'days')
      .subtract(15, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/static/images/avatars/avatar_10.png',
    city: 'Los Angeles',
    country: 'USA',
    currency: '$',
    email: 'elliott.stone@devias.io',
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: 'Elliott Stone',
    state: 'California',
    totalAmountSpent: 1000.0,
    totalOrders: 2,
    updatedAt: moment()
      .subtract(5, 'days')
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/static/images/avatars/avatar_11.png',
    city: 'Murray',
    country: 'USA',
    email: 'shen.zhi@devias.io',
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: 'Shen Zhi',
    state: 'Utah',
    totalAmountSpent: 0.0,
    totalOrders: 0,
    updatedAt: moment()
      .subtract(6, 'days')
      .subtract(8, 'hours')
      .toDate()
      .getTime(),
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/static/images/avatars/avatar_12.png',
    city: 'Salt Lake City',
    country: 'USA',
    currency: '$',
    email: 'merrile.burgett@devias.io',
    hasAcceptedMarketing: false,
    isProspect: false,
    isReturning: true,
    name: 'Merrile Burgett',
    state: 'Utah',
    totalAmountSpent: 200.0,
    totalOrders: 7,
    updatedAt: moment()
      .subtract(9, 'days')
      .subtract(1, 'hours')
      .toDate()
      .getTime(),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function CustomersPage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customers, setCustomers] = React.useState([]);

  const getCustomers = React.useCallback(async () => {
    try {
      const data = { customers: CUSTOMERS };

      if (isMountedRef.current) {
        setCustomers(data.customers);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <Page className={classes.root} title="Customer List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
}

CustomersPage.Guard = Protected;
CustomersPage.Layout = DashboardLayout;

export default CustomersPage;
