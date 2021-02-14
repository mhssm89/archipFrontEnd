import React from 'react';

import { Breadcrumbs, Grid, makeStyles, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';

import Link from 'src/components/common/Link';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Header({
  className,
  links = [],
  mainText = '',
  rightComponent = <></>,
  ...rest
}) {
  const classes = useStyles();

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
          {/* Breadcrumb Links */}
          {links.slice(0, -1).map(({ title, href }) => (
            <Link
              key={title}
              variant="body1"
              color="inherit"
              href={href}
              component={Link}>
              {title}
            </Link>
          ))}
          <Typography variant="body1" color="textPrimary">
            {links[links.length - 1].title}
          </Typography>
        </Breadcrumbs>

        <Typography variant="h3" color="textPrimary">
          {mainText}
        </Typography>
      </Grid>
      <Grid item>{rightComponent}</Grid>
    </Grid>
  );
}

export default Header;
