import React from 'react';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  IconButton,
  CircularProgress,
  SvgIcon,
} from '@material-ui/core';
import Link from 'src/components/common/Link';

import useTable from 'src/hooks/useTable';
import { useRouter } from 'next/router';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'axios';
import clsx from 'clsx';
import { ArrowRight as ArrowRightIcon, Edit as EditIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function CustomerProjectdetail({ className, ...rest }) {
  const classes = useStyles();
  const [projects, setProjects] = React.useState([]);
  const isMountedRef = useIsMountedRef();
  const router = useRouter();

  const {
    selectedItems,
    isLoading: isTableLoading,
    handleSelectOneItem,
  } = useTable({ projects });

  const getProjects = React.useCallback(async () => {
    try {
      const customerId = router.query['customerId'];
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKENDURL}/projects?_where[customer]=${customerId}`,
      );
      const data = res.data;
      setProjects(data);
      if (isMountedRef.current) {
        setProjects(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  if (!projects) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer Project Summery" />
      <Divider />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              <Typography>Project Name</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Start Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                End Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.fontWeightMedium}>
                Grand Total
              </Typography>
            </TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        {isTableLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <TableBody>
            {projects.map((item) => {
              const isItemSelected = selectedItems.includes(item.id);
              return (
                <TableRow
                  hover
                  key={item.id}
                  selected={selectedItems.indexOf(item.id) !== -1}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                  <TableCell>{item.grandTotal}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      component={Link}
                      href={`/projects/${item.id}/edit`}>
                      <SvgIcon fontSize="small">
                        <EditIcon />
                      </SvgIcon>
                    </IconButton>
                    <IconButton component={Link} href={`/projects/${item.id}`}>
                      <SvgIcon fontSize="small">
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </Card>
  );
}

export default CustomerProjectdetail;
