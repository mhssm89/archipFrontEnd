import React from 'react';

import { fade, makeStyles, useTheme } from '@material-ui/core';

import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
}));

function Chart({ data: dataProp, labels, className, ...rest }) {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Income',
        backgroundColor: theme.palette.success.main,
        data: dataProp.intransactions,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: 'Outcome',
        backgroundColor: theme.palette.warning.main,
        data: dataProp.outtransactions,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
    labels,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: true,
    },
    layout: {
      padding: 0,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
            beginAtZero: false,
            min: 0,
            maxTicksLimit: 10,
            callback: (value) => (value > 0 ? `${value}` : value),
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.dark,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.warning,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: (tooltipItem) => {
          let label = `Transactions ${tooltipItem.yLabel}`;

          if (tooltipItem.yLabel > 0) {
            label += '';
          }

          return label;
        },
      },
    },
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;
