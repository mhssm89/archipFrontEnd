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
function ProjectInfo({className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="project info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Project Name</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.firstName} */}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Customer</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.lastName} */}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>P.O.Q #</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.company} */}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
            Status
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.state} */}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
            Start Date
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.email} */}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
            End Date
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {/* {project.phoneNumber} */}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </Card>
  );
}

export default ProjectInfo;
