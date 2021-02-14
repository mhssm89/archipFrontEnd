import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import moment from 'moment';

import Page from 'src/components/common/Page';
import Protected from 'src/components/common/Protected';
import Filter from 'src/components/pages/projects/browse/Filter';
import Header from 'src/components/pages/projects/browse/Header';
import Results from 'src/components/pages/projects/browse/Results';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import DashboardLayout from 'src/layouts/DashboardLayout';

const PROJECTS = [
  {
    id: '5e8dcef8f95685ce21f16f3d',
    author: {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/images/avatars/avatar_5.png',
      name: 'Anje Keizer',
    },
    budget: 6125.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likesCount: 7,
    location: 'Europe',
    image: '/static/images/projects/project_1.png',
    rating: 5,
    membersCount: 2,
    title: 'Mella Full Screen Slider',
    type: 'Full-Time',
    updatedAt: moment().subtract(24, 'minutes').toDate().getTime(),
  },
  {
    id: '5e8dcf076c50b9d8e756a5a2',
    author: {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/static/images/avatars/avatar_9.png',
      name: 'Emilee Simchenko',
    },
    budget: 4205.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likesCount: 12,
    location: 'Europe',
    image: '/static/images/projects/project_2.png',
    rating: 4.5,
    membersCount: 3,
    title: 'Dashboard Design',
    type: 'Full-Time',
    updatedAt: moment().subtract(1, 'hour').toDate().getTime(),
  },
  {
    id: '5e8dcf105a6732b3ed82cf7a',
    author: {
      id: '5e88792be2d4cfb4bf0971d9',
      avatar: '/static/images/avatars/avatar_10.png',
      name: 'Elliott Stone',
    },
    budget: 2394.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likesCount: 18,
    location: 'Europe',
    image: '/static/images/projects/project_3.png',
    rating: 4.7,
    membersCount: 8,
    title: 'Ten80 Web Design',
    type: 'Full-Time',
    updatedAt: moment().subtract(16, 'hour').toDate().getTime(),
  },
  {
    id: '5e8dcf1cc7155d0e947dc27f',
    author: {
      id: '5e8877da9a65442b11551975',
      avatar: '/static/images/avatars/avatar_11.png',
      name: 'Shen Zhi',
    },
    budget: 2784.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    image: '/static/images/projects/project_4.png',
    isLiked: false,
    likesCount: 1,
    location: 'Europe',
    membersCount: 10,
    rating: 2,
    title: 'Neura e-commerce UI Kit',
    type: 'Full-Time',
    updatedAt: moment().subtract(3, 'days').toDate().getTime(),
  },
  {
    id: '5e8dcf252313876001e83221',
    author: {
      id: '5e887ac47eed253091be10cb',
      avatar: '/static/images/avatars/avatar_3.png',
      name: 'Cao Yu',
    },
    budget: 5835.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: false,
    likesCount: 7,
    location: 'Europe',
    image: '/static/images/projects/project_5.jpg',
    rating: 5,
    membersCount: 2,
    title: 'Administrator Dashboard',
    type: 'Full-Time',
    updatedAt: moment().subtract(7, 'days').toDate().getTime(),
  },
  {
    id: '5e8dcf4250d77c954b04902e',
    author: {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/images/avatars/avatar_5.png',
      name: 'Anje Keizer',
    },
    budget: 4255.0,
    caption:
      "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
    currency: '$',
    isLiked: true,
    likesCount: 4,
    location: 'Europe',
    image: null,
    rating: 4.2,
    membersCount: 12,
    title: 'Kalli UI Kit',
    type: 'Full-Time',
    updatedAt: moment().subtract(8, 'days').toDate().getTime(),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function ProjectBrowsePage() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = React.useState([]);

  const getProjects = React.useCallback(async () => {
    try {
      const data = { projects: PROJECTS };

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
    <Page className={classes.root} title="Project List">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Filter />
        </Box>
        <Box mt={6}>
          <Results projects={projects} />
        </Box>
      </Container>
    </Page>
  );
}

ProjectBrowsePage.Guard = Protected;
ProjectBrowsePage.Layout = DashboardLayout;

export default ProjectBrowsePage;
