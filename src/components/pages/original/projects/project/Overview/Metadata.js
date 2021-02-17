import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';

import Link from 'src/components/common/Link';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
}));

function Metadata({ className, project, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            component={Link}
            src={project.author.avatar}
            href="/">
            {getInitials(project.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Link
            color="textPrimary"
            component={Link}
            href="/"
            underline="none"
            variant="h6">
            {project.author.name}
          </Link>
        }
        title={
          <Typography display="block" variant="overline" color="textSecondary">
            Contest holder
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Deadline
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {moment(project.endDate).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Budget
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {numeral(project.budget).format(`${project.currency}0,0.00`)}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Last Update
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {moment(project.updatedAt).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Metadata;
