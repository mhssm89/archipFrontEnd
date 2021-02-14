import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';

import Link from 'src/components/common/Link';

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

function ProfileDetails({ className, user, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography
            className={classes.name}
            color="textPrimary"
            gutterBottom
            variant="h3">
            {user.name}
          </Typography>
          <Typography color="textPrimary" variant="body1">
            Your tier:{' '}
            <Link component={Link} href="/pricing">
              {user.tier}
            </Link>
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="text">
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileDetails;
