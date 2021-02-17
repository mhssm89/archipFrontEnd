import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';

import clsx from 'clsx';
import moment from 'moment';

import useIsMountedRef from 'src/hooks/useIsMountedRef';

const EMAILS = [
  {
    id: '5ece2ce3613486d95ffaea58',
    createdAt: moment()
      .subtract(3, 'days')
      .subtract(5, 'hours')
      .subtract(34, 'minutes')
      .toDate()
      .getTime(),
    description: 'Order confirmation',
  },
  {
    id: '5ece2ce8cebf7ad1d100c0cd',
    createdAt: moment()
      .subtract(4, 'days')
      .subtract(11, 'hours')
      .subtract(49, 'minutes')
      .toDate()
      .getTime(),
    description: 'Order confirmation',
  },
];

const emailOptions = [
  'Resend last invoice',
  'Send password reset',
  'Send verification',
];

const useStyles = makeStyles((theme) => ({
  root: {},
  cell: {
    padding: theme.spacing(1),
  },
}));

function Emails({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [emailOption, setEmailOption] = React.useState(emailOptions[0]);
  const [emails, setEmails] = React.useState([]);

  const getMails = React.useCallback(async () => {
    try {
      const data = { emails: EMAILS };

      if (isMountedRef.current) {
        setEmails(data.emails);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getMails();
  }, [getMails]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Send emails" />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="option"
          onChange={(event) => setEmailOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          value={emailOption}
          variant="outlined">
          {emailOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        <Box mt={2}>
          <Button variant="contained" startIcon={<MaiIcon />}>
            Send email
          </Button>
        </Box>
        <Box mt={2}>
          <Table>
            <TableBody>
              {emails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell className={classes.cell}>
                    {moment(email.createdAt).format('DD/MM/YYYY | HH:MM')}
                  </TableCell>
                  <TableCell className={classes.cell}>
                    {email.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Emails;
