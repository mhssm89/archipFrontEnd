import React from 'react';

import {
  Box,
  Card,
  Checkbox,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@material-ui/core';

import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  ArrowRight as ArrowRightIcon,
  Edit as EditIcon,
  Search as SearchIcon,
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Label from 'src/components/common/Label';
import Link from 'src/components/common/Link';
import useTable from 'src/hooks/useTable';

import BulkOperations from './BulkOperations';

const useStyles = makeStyles(() => ({
  root: {},
}));

const getStatusLabel = (projectStatus) => {
  const map = {
    negotiation: {
      text: 'Negotiation',
      color: 'error',
    },
    signed: {
      text: 'Signed',
      color: 'secondary',
    },
    inprogress: {
      text: 'InProgress',
      color: 'warning',
    },
    finished: {
      text: 'Finished',
      color: 'success',
    },
  };

  const { text, color } = map[projectStatus];

  return <Label color={color}>{text}</Label>;
};

function Results({ className, query, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isBulkLoading, setIsBulkLoading] = React.useState(false);
  const {
    // items,
    selectedItems,
    isAllItemsSelected,
    isSomeItemsSelected,
    page,
    limit,
    hasNext,
    hasPrev,
    isLoading: isTableLoading,
    setItems,
    setSelectedItems,
    enableBulkOperations,
    handleSelectAllItems,
    handleSelectOneItem,
    handlePageChange,
    handleLimitChange,
  } = useTable({ query });

  const items = [
    {
      id: 1,
      projectName: 'Project 1',
      customerName: 'Mohamed Hossam',
      status: 'negotiation',
      scope: 'commercial',
      startDate: '01-01-2021',
      endDate: '01-01-2021',
    },
    {
      id: 1,
      projectName: 'Project 2',
      customerName: 'Mohamed Hossam',
      status: 'signed',
      scope: 'commercial',
      startDate: '01-01-2021',
      endDate: '01-01-2021',
    },
    {
      id: 1,
      projectName: 'Project 3',
      customerName: 'Mohamed Hossam',
      status: 'inprogress',
      scope: 'commercial',
      startDate: '01-01-2021',
      endDate: '01-01-2021',
    },
    {
      id: 1,
      projectName: 'Project 4',
      customerName: 'Mohamed Hossam',
      status: 'finished',
      scope: 'commercial',
      startDate: '01-01-2021',
      endDate: '01-01-2021',
    },
  ];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Card>
        <Box p={2}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            style={{ width: '25%' }}
            onChange={() => {}}
            placeholder="Search Projects"
            value=""
            variant="outlined"
          />
        </Box>
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={700}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isAllItemsSelected}
                      indeterminate={isSomeItemsSelected}
                      onChange={handleSelectAllItems}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Scope</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              {isTableLoading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {items.map((item) => {
                    const isItemSelected = selectedItems.includes(item.id);

                    return (
                      <TableRow
                        hover
                        key={item.id}
                        selected={selectedItems.indexOf(item.id) !== -1}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) =>
                              handleSelectOneItem(event, item.id)
                            }
                            value={isItemSelected}
                          />
                        </TableCell>
                        <TableCell>{item.projectName}</TableCell>
                        <TableCell>{item.customerName}</TableCell>
                        <TableCell>{getStatusLabel(item.status)}</TableCell>
                        <TableCell>{item.scope}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.endDate}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            component={Link}
                            href={`/projects/${item.id}/edit`}>
                            <SvgIcon fontSize="small">
                              <EditIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            component={Link}
                            href={`/projects/${item.id}`}>
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
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={-1}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
          nextIconButtonProps={{ disabled: !hasNext }}
          backIconButtonProps={{ disabled: !hasPrev }}
          labelDisplayedRows={({ from }) => {
            if (items.length == 0) return '0-0';
            return `${from}-${from + items.length - 1}`;
          }}
        />
      </Card>
      <BulkOperations
        open={enableBulkOperations}
        selected={selectedItems}
        isLoading={isBulkLoading}
        onMarkActive={() => {}}
        onMarkInactive={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

export default Results;
