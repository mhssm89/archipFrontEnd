import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';

import Link from 'src/components/common/Link';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 125,
  },
  content: {
    paddingTop: 0,
  },
  avatar: {
    height: 64,
    width: 64,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function ApplicantCard({ className, applicant, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia className={classes.media} image={applicant.cover} />
      <CardContent className={classes.content}>
        <Box mt={-4} mb={2} display="flex" justifyContent="center">
          <Avatar
            alt="Applicant"
            className={classes.avatar}
            component={Link}
            src={applicant.avatar}
            href="/"
          />
        </Box>
        <Link
          align="center"
          color="textPrimary"
          component={Link}
          display="block"
          href="/"
          underline="none"
          variant="h6">
          {applicant.name}
        </Link>
        <Typography align="center" variant="body2" color="textSecondary">
          {applicant.commonConnections} contacts in common
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        {applicant.labels.map((label) => (
          <Chip
            key={label}
            className={classes.chip}
            label={label}
            variant="outlined"
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default ApplicantCard;
