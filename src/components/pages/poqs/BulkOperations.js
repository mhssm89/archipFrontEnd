import React from 'react';

import {
  Button,
  CircularProgress,
  Drawer,
  Grid,
  Hidden,
  makeStyles,
  SvgIcon,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import {
  Check as CheckIcon,
  Trash as TrashIcon,
  X as XIcon,
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function BulkOperations({
  className,
  onDelete = () => {},
  onMarkActive = () => {},
  onMarkInactive = () => {},
  open = false,
  selected,
  isLoading = false,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      open={open}
      PaperProps={{ elevation: 1 }}
      variant="persistent">
      <div className={clsx(classes.root, className)} {...rest}>
        <Grid alignItems="center" container spacing={2}>
          <Hidden smDown>
            <Grid item md={3}>
              <Typography color="textSecondary" variant="subtitle1">
                {selected.length} selected
              </Typography>
            </Grid>
          </Hidden>
          <Grid item md={6} xs={12}>
            <div className={classes.actions}>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <>
                  <Button
                    onClick={onMarkActive}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <CheckIcon />
                      </SvgIcon>
                    }>
                    Mark Active
                  </Button>
                  <Button
                    onClick={onMarkInactive}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <XIcon />
                      </SvgIcon>
                    }>
                    Mark Inactive
                  </Button>
                  <Button
                    onClick={onDelete}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <TrashIcon />
                      </SvgIcon>
                    }>
                    Delete
                  </Button>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}

export default BulkOperations;
