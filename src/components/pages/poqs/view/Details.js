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
  Button,
  Dialog,
  Checkbox,
} from '@material-ui/core';
import { Printer as Printer } from 'react-feather';
import clsx from 'clsx';

import Link from 'src/components/common/Link';
import Printprieview from './PrintPreview';
import Results from './Results';
import axios from 'axios';
import { Watch } from 'react-feather';
import Poqdetail from '../../projects/create/Poqdetail';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  const [printprieview, setprintprieview] = React.useState(false);
  const [printPartnumber, setPrintPartnumber] = React.useState(false);
  return (
    <>
      <Grid container spacing={3}>
        {/* POQ Details */}

        <Grid
          item
          container
          xs={12}
          direction={'column'}
          justify={'center'}
          alignItems={'flex-end'}>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setprintprieview(true);
              }}
              startIcon={<Printer fontSize="small" />}>
              Print
            </Button>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={printPartnumber}
                  onChange={() => {
                    setPrintPartnumber(!printPartnumber);
                  }}
                />
              }
              label="Enable Part Number with Printing"
            />
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title="BOQ Details" />
            <Divider />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{poq.poq['Name']}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>
                    <Link
                      component={Link}
                      href={`/customers/${poq.poq['customer']['id']}`}>
                      <div>{poq.poq['customer']['firstName']}</div>
                      <div>{poq.poq['customer']['companyName']}</div>
                      <div>{poq.poq['customer']['phoneNumber']}</div>
                      <div>{poq.poq['customer']['emailaddress']}</div>
                    </Link>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Start Date</TableCell>
                  <TableCell>{poq.poq['created_at']}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>End Date</TableCell>
                  <TableCell>{poq.poq['endDate']}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Shipping Address</TableCell>
                  <TableCell>{poq.poq['shippingAddress']}</TableCell>
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
                  <TableCell>{poq.poq['shippingCost']}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Design - Installation</TableCell>
                  <TableCell>{poq.poq['otherCost']}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Total Product Cost</TableCell>
                  <TableCell>{poq.poq['productTotalcost']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sub total</TableCell>
                  <TableCell>{poq.poq['subtotal']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Taxes</TableCell>
                  <TableCell>{poq.poq['vat']}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Grand total</TableCell>
                  <TableCell>{poq.poq['grandTotal']}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>

        {/* Products */}
        <Grid item md={8} xs={12}>
          <Results query={poq.poqDetail} />
        </Grid>
      </Grid>
      <Dialog fullScreen open={printprieview}>
        <Printprieview
          setprintprieview={setprintprieview}
          boq={poq}
          enablepartnumber={printPartnumber}
        />
      </Dialog>
    </>
  );
}

export default Details;
