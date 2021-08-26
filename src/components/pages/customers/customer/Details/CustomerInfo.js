import React from 'react';

import {
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
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function CustomerInfo({ customer, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              First Name
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.firstName}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Last Name
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.lastName}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Company</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.companyName}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>position</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.position}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Email</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.emailaddress}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Phone Number
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.phoneNumber}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Business Phone Number
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.businessPhone}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Category</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.customer_category.category}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Address</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {customer.address}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}

export default CustomerInfo;
