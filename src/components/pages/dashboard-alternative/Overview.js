import React from 'react';

import { Card, Grid, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import Label from 'src/components/common/Label';

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
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
}));

function Overview({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [overViewData, setOverViewData] = React.useState({});
  const getData = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/reportoverview`,
      );
      const data = res.data;
      if (isMountedRef.current) {
        setOverViewData(data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Total Projects number
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overViewData.ProjectsCount}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Total Customers numbers
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              {overViewData.CustomerCount}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Total Income
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              EGP {overViewData.TotalIncome}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            color="textSecondary">
            Total Outcome
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3" color="textPrimary">
              EGP {overViewData.TotalOutcome}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Overview;
