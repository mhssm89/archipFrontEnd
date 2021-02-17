import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import clsx from 'clsx';
import moment from 'moment';

import Link from 'src/components/common/Link';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  value: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function ReviewCard({ className, review, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        avatar={
          <Avatar alt="Reviewer" src={review.author.avatar}>
            {getInitials(review.author.name)}
          </Avatar>
        }
        disableTypography
        subheader={
          <Box flexWrap="wrap" display="flex" alignItems="center">
            <Box display="flex" alignItems="center" mr={1}>
              <Rating readOnly value={review.value} />
              <Typography className={classes.value} variant="h6">
                {review.value}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              | For{' '}
              <Link color="textPrimary" href="/" variant="h6">
                Low Budget
              </Link>{' '}
              | {moment(review.createdAt).fromNow()}
            </Typography>
          </Box>
        }
        title={
          <Link color="textPrimary" component={Link} href="/" variant="h5">
            {review.author.name}
          </Link>
        }
      />
      <Box pb={2} px={3}>
        <Typography variant="body2" color="textSecondary">
          {review.comment}
        </Typography>
      </Box>
    </Card>
  );
}

export default ReviewCard;
