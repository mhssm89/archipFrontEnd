import React from 'react';

import {
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

//function ProjectInfo({ project, className, ...rest }) {
function ProjectInfo({ className, project, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="project info" style={{ background: '#CDDCE3' }} />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Project Name
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Customer</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.customer['firstName']}
                {project.customer['lastName']}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>B.O.Q #</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.poq['Name']}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Status</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.status}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>scope</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.type}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Start Date
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.startDate}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>End Date</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {project.endDate}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}

export default ProjectInfo;
