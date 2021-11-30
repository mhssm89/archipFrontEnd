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
  List as listIcon,
  Lock as LockIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  PlusCircle as addprojectIcon,
  Share2 as ShareIcon,
  ShoppingCart as ShoppingCartIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  FilePlus as logisticIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Link from 'src/components/common/Link';
import Logo from 'src/components/common/Logo';
import useAuth from 'src/hooks/useAuth';

import NavItem from './NavItem';

const sections = [
  // {
  //   subheader: 'Reports',
  //   items: [
  //     {
  //       title: 'Dashboard',
  //       icon: PieChartIcon,
  //       href: '/dashboard',
  //     },
  //   ],
  // },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Projects',
        icon: BriefcaseIcon,
        items: [
          {
            title: 'List Projects',

            href: '/projects',
          },
          {
            title: 'Create Project',

            href: '/projects/create',
          },
          {
            title: 'Projects Scope',

            href: '/projects/scope',
          },
        ],
      },
      {
        title: 'Quotation',
        icon: ReceiptIcon,
        href: '/poqs',
        items: [
          {
            title: 'List of Quotations',
            href: '/poqs',
          },
          {
            title: 'Create Quotation',
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
          {
            title: 'Customers category',
            href: '/customers/category',
          },
        ],
      },
      {
        title: 'Brokers',
        icon: UsersIcon,
        href: '/customers',
        items: [
          {
            title: 'List Brokers',
            href: '/brokers',
          },
          {
            title: 'Create Broker',
            href: '/brokers/create',
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
          {
            title: 'Upload Products',
            href: '/products/upload',
          },
        ],
      },
      {
        title: 'suppliers',
        icon: UsersIcon,
        href: '/suppliers',
        items: [
          {
            title: 'List suppliers',
            href: '/suppliers',
          },
          {
            title: 'Create supplier',
            href: '/suppliers/create',
          },
        ],
      },
      {
        title: 'SG&A',
        icon: logisticIcon,
        href: '/sgas',
      },

      {
        title: 'Reports',
        icon: FolderIcon,
        href: '/orders',
        items: [
          {
            title: 'Customers',
            href: '/customer-report',
            icon: ReceiptIcon,
          },
          {
            title: 'Projects',
            href: '/orders-report',
            icon: ReceiptIcon,
          },
          {
            title: 'Qutaions',
            href: '/Quations-report',
            icon: ReceiptIcon,
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
        {/* <Box p={2}>
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
        </Box> */}
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
