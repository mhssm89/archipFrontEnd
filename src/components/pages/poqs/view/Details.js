import React from 'react';

import {
  Card,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

import clsx from 'clsx';

import Link from 'src/components/common/Link';

import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {},
  editor: {
    '& .ql-editor': {
      height: 400,
    },
  },
  addProduct: {
    marginLeft: theme.spacing(2),
  },
}));

function Details({ className, poq, ...rest }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {/* POQ Details */}
      <Grid item md={4} xs={12}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardHeader title="POQ Details" />
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Number #</TableCell>
                <TableCell>123456</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>
                  <Link component={Link} href="/customers/1/edit">
                    {poq.customerName}
                  </Link>
                  {` @ Freelance `}
                  <div>New Cairo</div>
                  <div>01234567891</div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Start Date</TableCell>
                <TableCell>01-01-2021</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>End Date</TableCell>
                <TableCell>01-01-2021</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Shipping Address</TableCell>
                <TableCell>New Cairo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card
          className={clsx(classes.root, className)}
          style={{ marginTop: 24 }}
          {...rest}>
          <CardHeader title="Prices" />
          <Divider />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Shipping Cost</TableCell>
                <TableCell>{`100 EGP`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Other Costs</TableCell>
                <TableCell>{`100 EGP`}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Total Cost</TableCell>
                <TableCell>{`1000 EGP`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>

      {/* Products */}
      <Grid item md={8} xs={12}>
        <Results />
      </Grid>
    </Grid>
  );
}

export default Details;
