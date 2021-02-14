import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardMedia,
  colors,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
  Tooltip,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Rating } from '@material-ui/lab';

import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import { Users as UsersIcon } from 'react-feather';

import Link from 'src/components/common/Link';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: 200,
    backgroundColor: theme.palette.background.dark,
  },
  likedButton: {
    color: colors.red[600],
  },
  membersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
}));

function ProjectCard({ className, project, ...rest }) {
  const classes = useStyles();
  const [isLiked, setLiked] = React.useState(project.isLiked);
  const [likesCount, setLikesCount] = React.useState(project.likesCount);

  const handleLike = () => {
    setLiked(true);
    setLikesCount((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikesCount((prevLikes) => prevLikes - 1);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={3}>
        <CardMedia className={classes.image} image={project.image} />
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar alt="Author" src={project.author.avatar}>
            {getInitials(project.author.name)}
          </Avatar>
          <Box ml={2}>
            <Link color="textPrimary" component={Link} href="/" variant="h5">
              {project.title}
            </Link>
            <Typography variant="body2" color="textSecondary">
              by{' '}
              <Link color="textPrimary" component={Link} href="/" variant="h6">
                {project.author.name}
              </Link>{' '}
              | Updated {moment(project.updatedAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={2} px={3}>
        <Typography color="textSecondary" variant="body2">
          {project.caption}
        </Typography>
      </Box>
      <Box py={2} px={3}>
        <Grid alignItems="center" container justify="space-between" spacing={3}>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              {numeral(project.budget).format(`${project.currency}0,0.00`)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Budget
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              {project.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Location
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              {project.type}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Type
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box py={2} pl={2} pr={3} display="flex" alignItems="center">
        {isLiked ? (
          <Tooltip title="Unlike">
            <IconButton className={classes.likedButton} onClick={handleUnlike}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Like">
            <IconButton onClick={handleLike}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        <Typography variant="subtitle2" color="textSecondary">
          {likesCount}
        </Typography>
        <SvgIcon
          fontSize="small"
          color="action"
          className={classes.membersIcon}>
          <UsersIcon />
        </SvgIcon>
        <Typography variant="subtitle2" color="textSecondary">
          {project.membersCount}
        </Typography>
        <Box flexGrow={1} />
        <Rating value={project.rating} size="small" readOnly />
      </Box>
    </Card>
  );
}

export default ProjectCard;
