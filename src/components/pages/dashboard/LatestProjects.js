import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';

import GenericMoreButton from 'src/components/common/GenericMoreButton';
import Link from 'src/components/common/Link';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import getInitials from 'src/utils/getInitials';

const TECHNOLOGY_MAP = {
  'html-css': '/static/images/technologies/html.svg',
  'react-js': '/static/images/technologies/react-js.svg',
  'vue-js': '/static/images/technologies/vue-js.svg',
  angular: '/static/images/technologies/angular.svg',
  figma: '/static/images/technologies/figma.svg',
  sketch: '/static/images/technologies/sketch.svg',
};
const PROJECTS = [
  {
    id: '5eff24e675e7b3cba23e4be7',
    author: {
      avatar: '/static/images/avatars/avatar_5.png',
      name: 'Anje Keizer',
    },
    budget: 12500,
    createdAt: moment()
      .subtract(2, 'hours')
      .subtract(34, 'minutes')
      .subtract(10, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    technologies: ['angular'],
    title: 'Mella Full Screen Slider',
  },
  {
    id: '5eff24e98e2c9107e95cb827',
    author: {
      avatar: '/static/images/avatars/avatar_9.png',
      name: 'Emilee Simchenko',
    },
    budget: 15750,
    createdAt: moment()
      .subtract(10, 'hours')
      .subtract(56, 'minutes')
      .subtract(25, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    technologies: ['sketch', 'html-css'],
    title: 'Dashboard Design',
  },
  {
    id: '5eff24f0d97353e3576d3c26',
    author: {
      avatar: '/static/images/avatars/avatar_10.png',
      name: 'Elliott Stone',
    },
    budget: 15750,
    createdAt: moment()
      .subtract(1, 'days')
      .subtract(30, 'minutes')
      .subtract(50, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    technologies: ['react-js'],
    title: 'Ten80 Web Design',
  },
  {
    id: '5eff24f737bc6b191dd9bf58',
    author: {
      avatar: '/static/images/avatars/avatar_11.png',
      name: 'Shen Zhi',
    },
    budget: 12500,
    createdAt: moment()
      .subtract(1, 'days')
      .subtract(4, 'minutes')
      .subtract(30, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    technologies: ['vue-js'],
    title: 'Neura e-commerce UI Kit',
  },
  {
    id: '5eff24fb29fc5e37bdab3b2d',
    author: {
      avatar: '/static/images/avatars/avatar_3.png',
      name: 'Cao Yu',
    },
    budget: 15750,
    createdAt: moment()
      .subtract(1, 'days')
      .subtract(11, 'minutes')
      .subtract(6, 'seconds')
      .toDate()
      .getTime(),
    currency: '$',
    technologies: ['angular', 'figma'],
    title: 'Administrator Dashboard',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  technology: {
    height: 30,
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

function LatestProjects({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = React.useState([]);

  const getProjects = React.useCallback(async () => {
    try {
      const data = {
        projects: PROJECTS,
      };

      if (isMountedRef.current) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Latest Projects" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={900}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Budget</TableCell>
                <TableCell>Technology</TableCell>
                <TableCell align="right" sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Created
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow hover key={project.id}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt="Author" src={project.author.avatar}>
                        {getInitials(project.author.name)}
                      </Avatar>
                      <Box ml={1}>{project.author.name}</Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {numeral(project.budget).format(
                      `${project.currency}0,0.00`,
                    )}
                  </TableCell>
                  <TableCell>
                    {project.technologies.map((technology) => (
                      <img
                        alt="Tech"
                        key={technology}
                        className={classes.technology}
                        src={TECHNOLOGY_MAP[technology]}
                      />
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {moment(project.createdAt).format('DD MMM, YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={Link}
          size="small"
          href="/projects"
          endIcon={<NavigateNextIcon />}>
          See all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestProjects;
