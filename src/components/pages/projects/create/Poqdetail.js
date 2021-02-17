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
import FormInput from '../../../controls/FormInput';

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
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const classes = useStyles();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);

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

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}>
      <Grid container spacing={2} >
        <Grid item xs={8}>
          <Typography variant="h3" mb={3}>
            Select P.O.Q
          </Typography>
        </Grid>
        <Grid item xs={8} >
          <PoqSearchForm />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title="P.O.Q Summery"/>
              <Divider />
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Customer Name
                    </TableCell>
                    <TableCell>
                      AAA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Total Cost
                    </TableCell>
                    <TableCell>
                      52,000
                    </TableCell>
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
        <Button
          color="secondary"
          disabled={isSubmitting}
          type="submit" // to be removed 
          variant="contained"
          size="large">
          Next
        </Button>
      </Box>
    </form>
  );
}

export default Poqdetail;
