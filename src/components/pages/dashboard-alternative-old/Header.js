import React from 'react';

import {
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import { Calendar as CalendarIcon } from 'react-feather';

import Link from 'src/components/common/Link';

const timeRanges = [
  {
    value: 'today',
    text: 'Today',
  },
  {
    value: 'yesterday',
    text: 'Yesterday',
  },
  {
    value: 'last_30_days',
    text: 'Last 30 days',
  },
  {
    value: 'last_year',
    text: 'Last year',
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const actionRef = React.useRef(null);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [timeRange, setTimeRange] = React.useState(timeRanges[2].text);

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}>
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb">
          <Link variant="body1" color="inherit" href="/" component={Link}>
            Dashboard
          </Link>
          <Typography variant="body1" color="textPrimary">
            Reports
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Finance Overview
        </Typography>
      </Grid>
      <Grid item>
        <Button
          ref={actionRef}
          onClick={() => setMenuOpen(true)}
          startIcon={
            <SvgIcon fontSize="small">
              <CalendarIcon />
            </SvgIcon>
          }>
          {timeRange}
        </Button>
        <Menu
          anchorEl={actionRef.current}
          onClose={() => setMenuOpen(false)}
          open={isMenuOpen}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          {timeRanges.map((_timeRange) => (
            <MenuItem
              key={_timeRange.value}
              onClick={() => setTimeRange(_timeRange.text)}>
              {_timeRange.text}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
}

export default Header;
