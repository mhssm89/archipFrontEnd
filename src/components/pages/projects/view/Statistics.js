import React from 'react';

import { Box, Card, Grid, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';
import numeral from 'numeral';

import Label from 'src/components/common/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  overline: {
    marginTop: theme.spacing(1),
  },
}));

function Statistics({ className, total, totalincome, totaloutcome, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const statistics = {
    totalcollected: totalincome,
    totalpaid: totaloutcome,
    totalcost: total,
  };
  // const getStatistics = React.useCallback(async () => {
  //   try {
  //     const data = {
  //       statistics: {
  //         totalcollected: totalincome,
  //         totalpaid: 90000,
  //         totalcost: total,
  //       },
  //     };

  //     if (isMountedRef.current) {
  //       setStatistics(data.statistics);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [isMountedRef]);

  // React.useEffect(() => {
  //   getStatistics();
  // }, [getStatistics]);

  // if (!statistics) {
  //   return null;
  // }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {numeral(statistics.totalcollected).format('$0,0.00')}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary">
            Total Collected from Customers
          </Typography>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {numeral(statistics.totalpaid).format('$0,0.00')}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary">
            Total Paid by ARCH-IP
          </Typography>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {numeral(statistics.totalcost).format('$0,0.00')}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary">
            Total Cost
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Statistics;
