import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import clsx from 'clsx';
import Alert from '@material-ui/lab/Alert';

//import { alpha } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/WarningOutlined';
import { AlertTitle } from '@material-ui/lab';
const useStyles = makeStyles(() => ({
  root: {},
  mainBox: { margin: '10%' },
}));

function DeleteDialoge({
  className,
  setOpenDialoge,
  deletedValue,
  runFunction,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Alert severity="error">
          <AlertTitle>DELETE</AlertTitle>
          Are you sure you want to delete — <strong>{deletedValue}</strong>
        </Alert>
        <Grid
          container
          xs={12}
          justify={'flex-end'}
          style={{ background: '#fdecea' }}>
          <Grid item xs={3} style={{ marginBottom: '1.5%' }}>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setOpenDialoge(false);
              }}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{ background: '	#d8281b' }}
              onClick={() => {
                runFunction();
                setOpenDialoge(false);
              }}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DeleteDialoge;
