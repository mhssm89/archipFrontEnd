import React from 'react';

import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Paper,
  Radio,
  Typography,
  Grid,
  Input,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

import clsx from 'clsx';
import PoqSearchForm from 'src/components/pages/projects/create/PoqSearchForm';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {},
  stepButton: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
    fontWeightMedium: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
}));

function Poqdetail({
  className,
  handlePoq,
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const classes = useStyles();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [poq, setPoq] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      if (poq) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKENDURL}/poqdetails?_where[poq]=${poq.id}`,
        );
        handlePoq(poq);
      }
      // NOTE: Make API request

      if (onNext) {
        onNext();
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };
  console.log(poq);
  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h3" mb={3}>
            Select B.O.Q
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <PoqSearchForm onChange={setPoq} />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title="P.O.Q Summery" />
            <Divider />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  {poq ? (
                    <TableCell>{poq.customer}</TableCell>
                  ) : (
                    <TableCell> - </TableCell>
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>Total Cost</TableCell>
                  {poq ? (
                    <TableCell>{poq.grandtotal}</TableCell>
                  ) : (
                    <TableCell>0.00</TableCell>
                  )}
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
      {error && (
        <Box mt={2}>
          <FormHelperText error>{error}</FormHelperText>
        </Box>
      )}
      <Box mt={6} display="flex">
        {onBack && (
          <Button onClick={onBack} size="large">
            Previous
          </Button>
        )}
        <Box flexGrow={1} />
        {poq ? (
          <Button
            color="secondary"
            disabled={isSubmitting}
            type="submit" // to be removed
            variant="contained"
            size="large">
            Next
          </Button>
        ) : (
          <Button
            color="secondary"
            disabled={true}
            type="submit" // to be removed
            variant="contained"
            size="large">
            Next
          </Button>
        )}
      </Box>
    </form>
  );
}

export default Poqdetail;
