import {
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { AvatarGroup } from '@material-ui/lab';

import clsx from 'clsx';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {},
  viewButton: {
    marginLeft: theme.spacing(2),
  },
}));

function TaskItem({ className, task, ...rest }) {
  const classes = useStyles();

  let deadline = 'N/A';

  if (task.deadline) {
    const now = moment();
    const deadlineMoment = moment(task.deadline);

    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
    }
  }

  return (
    <ListItem className={clsx(classes.root, className)} {...rest}>
      <ListItemText
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={deadline}
      />
      <AvatarGroup max={3}>
        {task.members.map((member) => (
          <Tooltip key={member.name} title="View">
            <Avatar src={member.avatar} />
          </Tooltip>
        ))}
      </AvatarGroup>
      <Tooltip title="View task">
        <IconButton className={classes.viewButton} edge="end">
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

export default TaskItem;
