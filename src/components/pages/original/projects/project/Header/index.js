import React from 'react';

import {
  Box,
  Button,
  Grid,
  makeStyles,
  SvgIcon,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import {
  AlertTriangle as AlertIcon,
  Calendar as CalendarIcon,
  Check as CheckIcon,
  Send as SendIcon,
  Share2 as ShareIcon,
} from 'react-feather';

import ApplyModal from './ApplyModal';

const useStyles = makeStyles((theme) => ({
  root: {},
  badge: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  badgeIcon: {
    marginRight: theme.spacing(1),
  },
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

function Header({ className, project, ...rest }) {
  const classes = useStyles();
  const [isApplyModalOpen, setApplyModalOpen] = React.useState(false);

  const handleApplyModalOpen = () => {
    setApplyModalOpen(true);
  };

  const handleApplyModalClose = () => {
    setApplyModalOpen(false);
  };

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}>
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          {project.title}
        </Typography>
        <Box
          mx={-2}
          display="flex"
          color="text.secondary"
          alignItems="center"
          flexWrap="wrap">
          <div className={classes.badge}>
            <SvgIcon fontSize="small" className={classes.badgeIcon}>
              {project.isActive ? <CheckIcon /> : <AlertIcon />}
            </SvgIcon>
            <Typography variant="body2" color="inherit" component="span">
              {project.isActive ? 'Active' : 'Inactive'}
            </Typography>
          </div>
          <div className={classes.badge}>
            <SvgIcon fontSize="small" className={classes.badgeIcon}>
              <CalendarIcon />
            </SvgIcon>
            <Typography variant="body2" color="inherit" component="span">
              {`Deadline ${moment(project.endDate).fromNow()}`}
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item>
        <Button
          className={classes.action}
          startIcon={
            <SvgIcon fontSize="small">
              <ShareIcon />
            </SvgIcon>
          }>
          Share
        </Button>
        <Button
          className={classes.action}
          onClick={handleApplyModalOpen}
          variant="contained"
          color="secondary"
          startIcon={
            <SvgIcon fontSize="small">
              <SendIcon />
            </SvgIcon>
          }>
          Apply for a role
        </Button>
        <ApplyModal
          author={project.author}
          onApply={handleApplyModalClose}
          onClose={handleApplyModalClose}
          open={isApplyModalOpen}
        />
      </Grid>
    </Grid>
  );
}

export default Header;
