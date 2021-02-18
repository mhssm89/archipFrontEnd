import React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function CustomerProjectdetail({ customer, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer Project Summery" />
      <Divider />
      <Table>
        <TableBody>
        <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              <Typography>
              Project Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Start Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                End Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Total Cost
              </Typography>
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Credit Card
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.creditCard}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Paid</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                2 ($50.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Draft</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                1 ($5.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Unpaid/Due
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                1 ($12.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Refunded</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                0 ($0.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Gross Income
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                $1,200.00
              </Typography>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </Card>
  );
}

export default CustomerProjectdetail;
