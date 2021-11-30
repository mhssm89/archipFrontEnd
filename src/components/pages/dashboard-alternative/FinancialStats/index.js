import React from 'react';

import { Box, Card, CardHeader, Divider, makeStyles } from '@material-ui/core';

import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import Chart from './Chart';
import { el } from 'date-fns/locale';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: 400,
  },
}));

function FinancialStats({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [chartData, setChartData] = React.useState([]);
  const [labels, setlabels] = React.useState([]);
  const [stats, setStats] = React.useState({});

  const getData = React.useCallback(async () => {
    try {
      var allmonth = [];
      var inTransactions = [];
      var outTransactions = [];

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/reportoverview/month_transaction`,
      );
      const data = res.data;
      data.forEach((element) => {
        allmonth.push(element.month);
        if (element.type == 'in') {
          inTransactions.push(element.sum);
        }
        if (element.type == 'out') {
          outTransactions.push(element.sum);
        }
      });

      if (isMountedRef.current) {
        setlabels(
          allmonth.filter((val, id, array) => array.indexOf(val) == id),
        );
        setStats({
          ...stats,
          intransactions: inTransactions,
          outtransactions: outTransactions,
        });
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
      {/* <CardHeader action={<GenericMoreButton />} title="Financial Stats" /> */}
      <CardHeader title="Financial Stats" />

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700} pt={4} pr={2} pl={2}>
          <Chart className={classes.chart} data={stats} labels={labels} />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default FinancialStats;
