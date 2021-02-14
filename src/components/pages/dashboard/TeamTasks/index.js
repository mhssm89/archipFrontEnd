import React from 'react';

import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  makeStyles,
} from '@material-ui/core';

import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import TaskItem from './TaskItem';

const TASKS = [
  {
    id: '5eff24b501ba5281ddb5378c',
    deadline: moment().add(1, 'days').add(1, 'hour').toDate().getTime(),
    members: [
      {
        avatar: '/static/images/avatars/avatar_2.png',
        name: 'Ekaterina Tankova',
      },
      {
        avatar: '/static/images/avatars/avatar_3.png',
        name: 'Cao Yu',
      },
    ],
    title: 'Update the API for the project',
  },
  {
    id: '5eff24bb5bb3bd1beeddde78',
    deadline: moment().add(2, 'day').add(1, 'hour').toDate().getTime(),
    members: [
      {
        avatar: '/static/images/avatars/avatar_8.png',
        name: 'Miller Edwards',
      },
      {
        avatar: '/static/images/avatars/avatar_10.png',
        name: 'Elliott Stone',
      },
      {
        avatar: '/static/images/avatars/avatar_12.png',
        name: 'Merrile Burgett',
      },
    ],
    title: 'Redesign the landing page',
  },
  {
    id: '5eff24c019175119993fc1ff',
    deadline: moment().toDate().getTime(),
    members: [
      {
        avatar: '/static/images/avatars/avatar_7.png',
        name: 'Adam Denisov',
      },
    ],
    title: 'Solve the bug for the showState',
  },
  {
    id: '5eff24c52ce9fdadffa11959',
    deadline: null,
    members: [
      {
        avatar: '/static/images/avatars/avatar_2.png',
        name: 'Ekaterina Tankova',
      },
      {
        avatar: '/static/images/avatars/avatar_10.png',
        name: 'Elliott Stone',
      },
    ],
    title: 'Release v1.0 Beta',
  },
  {
    id: '5eff24ca3ffab939b667258b',
    deadline: null,
    members: [
      {
        avatar: '/static/images/avatars/avatar_5.png',
        name: 'Anje Keizer',
      },
      {
        avatar: '/static/images/avatars/avatar_2.png',
        name: 'Ekaterina Tankova',
      },
      {
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith',
      },
    ],
    title: 'GDPR Compliance',
  },
  {
    id: '5eff24cf8740fc9faca4e463',
    deadline: null,
    members: [
      {
        avatar: '/static/images/avatars/avatar_8.png',
        name: 'Miller Edwards',
      },
    ],
    title: 'Redesign Landing Page',
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

function TeamTasks({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [tasks, setTasks] = React.useState([]);

  const getTasks = React.useCallback(async () => {
    try {
      const data = { tasks: TASKS };

      if (isMountedRef.current) {
        setTasks(data.tasks);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Team Tasks" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={400}>
          <List>
            {tasks.map((task, i) => (
              <TaskItem
                divider={i < tasks.length - 1}
                key={task.id}
                task={task}
              />
            ))}
          </List>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default TeamTasks;
