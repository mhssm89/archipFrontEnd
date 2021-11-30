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
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const labelColors = {
  complete: 'success',
  pending: 'warning',
  rejected: 'error',
};

const useStyles = makeStyles(() => ({
  root: {},
}));

function LatestOrders({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [poqs, setpoqs] = React.useState([]);

  const getpoqs = React.useCallback(async () => {
    try {
      const res = axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/reportoverview/latestboqs`,
      );

      const data = (await res).data;

      if (isMountedRef.current) {
        setpoqs(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getpoqs();
  }, [getpoqs]);

  console.log(poqs);
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Boq #
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Expires On</TableCell>
                <TableCell>Total Cost</TableCell>
                <TableCell align="right">Creation Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {poqs.map((poq) => (
                <TableRow hover key={poq.id}>
                  <TableCell>{poq.Name}</TableCell>
                  {poq.firstName ? (
                    <TableCell>{poq.firstName + ' ' + poq.lastName}</TableCell>
                  ) : (
                    <TableCell>NA</TableCell>
                  )}
                  <TableCell>{poq.phoneNumber}</TableCell>
                  <TableCell>
                    {moment(poq.endDate).format('DD MMM ,YYYY')}
                  </TableCell>
                  <TableCell>
                    EGP {numeral(poq.grandTotal).format(`${poq.grandTotal}0,`)}
                  </TableCell>
                  <TableCell align="right">
                    {moment(poq.startDate).format('DD MMM, YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={Link}
          size="small"
          href="/poqs"
          endIcon={<NavigateNextIcon />}>
          See all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestOrders;
