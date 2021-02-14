import { Avatar, Box, Card, makeStyles, Typography } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import clsx from 'clsx';

import Label from 'src/components/common/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48,
  },
}));

const TodaysMoney = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    value: '24,000',
    currency: '$',
    difference: 4,
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary">
          Todays money
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {data.currency}
            {data.value}
          </Typography>
          <Label
            className={classes.label}
            color={data.difference > 0 ? 'success' : 'error'}>
            {data.difference > 0 ? '+' : ''}
            {data.difference}%
          </Label>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <AttachMoneyIcon />
      </Avatar>
    </Card>
  );
};

export default TodaysMoney;
