import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import axios from 'axios';
import GenericMoreButton from 'src/components/common/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import Chart from './Chart';
import { element } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
}));

function EarningsSegmentation({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [earnings, setEarnings] = React.useState(null);
  var mylabels = [];
  var mydata = [];
  var allprojects = 1;

  const getEarnings = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/reportoverview/projectscope`,
      );
      const predata = res.data;
      allprojects = predata[1][0].TotalProjects;
      var precentage = 0;
      predata[0].forEach((element) => {
        mylabels.push(element.scope);
        precentage = (element.COUNT / allprojects) * 100;
        mydata.push(Math.round(precentage * 10) / 10);
        precentage = 0;
      });

      const data = {
        earnings: {
          datasets: [
            {
              data: mydata,
              backgroundColor: [
                '#3d72eb',
                '#4b9e86',
                '#b658f5',
                '#f654f8',
                '#5554f9',
              ],
            },
          ],
          labels: mylabels,
        },
      };

      if (isMountedRef.current) {
        setEarnings(data.earnings);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getEarnings();
  }, [getEarnings]);

  if (!earnings) {
    return null;
  }
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Projects Segmentation" />
      <Divider />
      <Box p={3} position="relative" minHeight={320}>
        <Chart data={earnings} />
      </Box>
      <Divider />
      <Box display="flex">
        {earnings.labels.map((label, i) => (
          <div key={label} className={classes.item}>
            <Typography variant="h4" color="textPrimary">
              {earnings.datasets[0].data[i]}%
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {label}
            </Typography>
          </div>
        ))}
      </Box>
    </Card>
  );
}

export default EarningsSegmentation;
