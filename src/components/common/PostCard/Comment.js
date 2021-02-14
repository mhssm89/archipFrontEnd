import React from 'react';

import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';

import Link from 'src/components/common/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  bubble: {
    borderRadius: theme.shape.borderRadius,
  },
}));

function Comment({ className, comment, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar
        alt="Person"
        component={Link}
        src={comment.author.avatar}
        href="/"
      />
      <Box
        flexGrow={1}
        p={2}
        ml={2}
        bgcolor="background.dark"
        className={classes.bubble}>
        <Box display="flex" alignItems="center" mb={1}>
          <Link color="textPrimary" component={Link} href="/" variant="h6">
            {comment.author.name}
          </Link>
          <Box flexGrow={1} />
          <Typography color="textSecondary" variant="caption">
            {moment(comment.createdAt).fromNow()}
          </Typography>
        </Box>
        <Typography variant="body1" color="textPrimary">
          {comment.message}
        </Typography>
      </Box>
    </div>
  );
}

export default Comment;
