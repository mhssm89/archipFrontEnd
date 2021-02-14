import React from 'react';

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import clsx from 'clsx';
import moment from 'moment';
import { Lightbox } from 'react-modal-image';

import Link from 'src/components/common/Link';

import Comment from './Comment';
import CommentAdd from './CommentAdd';
import Reactions from './Reactions';

const useStyles = makeStyles(() => ({
  root: {},
  date: {
    marginLeft: 6,
  },
  media: {
    height: 500,
    backgroundPosition: 'top',
  },
}));

function PostCard({ className, post, ...rest }) {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader
          avatar={
            <Avatar
              alt="Person"
              component={Link}
              src={post.author.avatar}
              href="/"
            />
          }
          disableTypography
          subheader={
            <Box display="flex" alignItems="center">
              <AccessTimeIcon fontSize="small" />
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.date}>
                {moment(post.createdAt).fromNow()}
              </Typography>
            </Box>
          }
          title={
            <Link color="textPrimary" component={Link} href="/" variant="h6">
              {post.author.name}
            </Link>
          }
        />
        <Box px={3} pb={2}>
          <Typography variant="body1" color="textPrimary">
            {post.message}
          </Typography>
          {post.media && (
            <Box mt={2}>
              <CardActionArea onClick={() => setSelectedImage(post.media)}>
                <CardMedia className={classes.media} image={post.media} />
              </CardActionArea>
            </Box>
          )}
          <Box mt={2}>
            <Reactions post={post} />
          </Box>
          <Box my={2}>
            <Divider />
          </Box>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
          <Box my={2}>
            <Divider />
          </Box>
          <CommentAdd />
        </Box>
      </Card>
      {selectedImage && (
        <Lightbox
          large={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default PostCard;
