import React from 'react';

import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import clsx from 'clsx';
import moment from 'moment';

import Link from 'src/components/common/Link';
import ProjectCard from 'src/components/common/ProjectCard';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

function Projects({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = React.useState([]);

  const getProjects = React.useCallback(async () => {
    try {
      const data = {
        projects: [
          {
            id: '5e8dcf105a6732b3ed82cf7a',
            author: {
              id: '5e86809283e28b96d2d38537',
              avatar: '/static/images/avatars/avatar_6.png',
              name: 'Katarina Smith',
            },
            budget: 2394.0,
            caption:
              "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.",
            currency: '$',
            isLiked: true,
            likesCount: 57,
            location: 'Europe',
            image: '/static/images/projects/project_3.png',
            rating: 3,
            membersCount: 5,
            technology: 'Angular JS',
            title: 'Ten80 Web Design',
            type: 'Full-Time',
            updatedAt: moment().subtract(24, 'minutes').toDate().getTime(),
          },
        ],
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}>
        <Typography className={classes.title} variant="h5" color="textPrimary">
          Active Projects
        </Typography>
        <Button
          component={Link}
          href="/projects/browse"
          endIcon={<KeyboardArrowRightIcon />}>
          See all
        </Button>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item key={project.id} md={4} sm={6} xs={12}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
