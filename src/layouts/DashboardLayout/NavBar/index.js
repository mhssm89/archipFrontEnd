/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import PropTypes from 'prop-types';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  DollarSign as DollarSignIcon,
  Edit as EditIcon,
  Folder as FolderIcon,
  Layout as LayoutIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  ShoppingCart as ShoppingCartIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Link from 'src/components/common/Link';
import Logo from 'src/components/common/Logo';
import useAuth from 'src/hooks/useAuth';

import NavItem from './NavItem';

const sections = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/dashboard',
      },
      {
        title: 'Dashboard Alternative',
        icon: BarChartIcon,
        href: '/dashboard-alternative',
      },
    ],
  },
  // {
  //   subheader: 'Basic Data',
  //   items: [
  //     {
  //       title: "Product's Kinds",
  //       icon: ShoppingCartIcon,
  //       href: '/product-kinds',
  //       items: [
  //         {
  //           title: 'List Kinds',
  //           href: '/product-kinds',
  //         },
  //         {
  //           title: 'Create Kind',
  //           href: '/product-kinds/create',
  //         },
  //       ],
  //     },
  //     {
  //       title: "Product's Classes",
  //       icon: ShoppingCartIcon,
  //       href: '/product-classes',
  //       items: [
  //         {
  //           title: 'List Classes',
  //           href: '/product-classes',
  //         },
  //         {
  //           title: 'Create Class',
  //           href: '/product-classes/create',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    subheader: 'Management',
    items: [
      {
        title: 'POQs',
        icon: ReceiptIcon,
        href: '/poqs',
        items: [
          {
            title: 'List POQs',
            href: '/poqs',
          },
          {
            title: 'Create POQ',
            href: '/poqs/create',
          },
        ],
      },
      {
        title: 'Customers',
        icon: UsersIcon,
        href: '/customers',
        items: [
          {
            title: 'List Customers',
            href: '/customers',
          },
          {
            title: 'Create Customer',
            href: '/customers/create',
          },
        ],
      },
      {
        title: 'Products',
        icon: ShoppingCartIcon,
        href: '/products',
        items: [
          {
            title: 'List Products',
            href: '/products',
          },
          {
            title: 'Create Product',
            href: '/products/create',
          },
        ],
      },
      {
        title: 'Orders',
        icon: FolderIcon,
        href: '/orders',
        items: [
          {
            title: 'List Orders',
            href: '/orders',
          },
          {
            title: 'View Order',
            href: '/orders/1',
          },
        ],
      },
      {
        title: 'Invoices',
        icon: ReceiptIcon,
        href: '/invoices',
        items: [
          {
            title: 'List Invoices',
            href: '/invoices',
          },
          {
            title: 'View Invoice',
            href: '/invoices/1',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Applications',
    items: [
      {
        title: 'Projects Platform',
        href: '/projects',
        icon: BriefcaseIcon,
        items: [
          {
            title: 'Overview',
            href: '/projects/overview',
          },
          {
            title: 'Browse Projects',
            href: '/projects/browse',
          },
          {
            title: 'Create Project',
            href: '/projects/create',
          },
          {
            title: 'View Project',
            href: '/projects/1',
          },
        ],
      },
      {
        title: 'Social Platform',
        href: '/social',
        icon: ShareIcon,
        items: [
          {
            title: 'Profile',
            href: '/social/profile',
          },
          {
            title: 'Feed',
            href: '/social/feed',
          },
        ],
      },
      {
        title: 'Kanban',
        href: '/kanban',
        icon: TrelloIcon,
      },
      {
        title: 'Mail',
        href: '/mail',
        icon: MailIcon,
      },
      {
        title: 'Chat',
        href: '/chat',
        icon: MessageCircleIcon,
        // eslint-disable-next-line react/display-name
        info: () => <Chip color="secondary" size="small" label="Updated" />,
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: CalendarIcon,
        // eslint-disable-next-line react/display-name
        info: () => <Chip color="secondary" size="small" label="Updated" />,
      },
    ],
  },
  {
    subheader: 'Auth',
    items: [
      {
        title: 'Login',
        href: '/login-unprotected',
        icon: LockIcon,
      },
      {
        title: 'Register',
        href: '/register-unprotected',
        icon: UserPlusIcon,
      },
    ],
  },
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Account',
        href: '/account',
        icon: UserIcon,
      },
      {
        title: 'Error',
        href: '/404',
        icon: AlertCircleIcon,
      },
      {
        title: 'Pricing',
        href: '/pricing',
        icon: DollarSignIcon,
      },
    ],
  },
  {
    subheader: 'Extra',
    items: [
      {
        title: 'Charts',
        href: '/extra/charts',
        icon: BarChartIcon,
        items: [
          {
            title: 'Apex Charts',
            href: '/extra/charts/apex',
          },
        ],
      },
      {
        title: 'Forms',
        href: '/extra/forms',
        icon: EditIcon,
        items: [
          {
            title: 'Formik',
            href: '/extra/forms/formik',
          },
          {
            title: 'Redux Forms',
            href: '/extra/forms/redux',
          },
        ],
      },
      {
        title: 'Editors',
        href: '/extra/editors',
        icon: LayoutIcon,
        items: [
          {
            title: 'DraftJS Editor',
            href: '/extra/editors/draft-js',
          },
          {
            title: 'Quill Editor',
            href: '/extra/editors/quill',
          },
        ],
      },
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        [],
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    // const open = matchPath(pathname, {
    //   path: item.href,
    //   exact: false,
    // });
    const open = pathname == item.href;

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}>
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>,
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />,
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [router.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <Link href="/">
              <Logo width={30} height={20} />
            </Link>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <Link href="/account">
              <Avatar alt="User" className={classes.avatar} />
            </Link>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              href="/account"
              variant="h5"
              color="textPrimary"
              underline="none">
              {`${user?.name}`}
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {sections.map((section) => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }>
              {renderNavItems({
                items: section.items,
                pathname: router.pathname,
              })}
            </List>
          ))}
        </Box>
        <Divider />
        <Box p={2}>
          <Box p={2} borderRadius="borderRadius" bgcolor="background.dark">
            <Typography variant="h6" color="textPrimary">
              Need Help?
            </Typography>
            <Link
              variant="subtitle1"
              color="secondary"
              component={Link}
              href="/docs">
              Check our docs
            </Link>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
