import React from 'react';

import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';

// import QuillEditor from 'src/components/QuillEditor';

const useStyles = makeStyles((theme) => ({
  root: {},
  editorContainer: {
    marginTop: theme.spacing(3),
  },
  editor: {
    '& .ql-editor': {
      height: 400,
    },
  },
}));

function ProjectDescription({
  className,
  onBack = () => {},
  onComplete = () => {},
  ...rest
}) {
  const classes = useStyles();
  // const [content, setContent] = React.useState('');
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  // const handleChange = (value) => {
  //   setContent(value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);

      // NOTE: Make API request

      if (onComplete) {
        onComplete();
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}>
      <Typography variant="h3" color="textPrimary">
        Please select one option
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle1" color="textSecondary">
          Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam
          fringilla velit sit amet euismod.
        </Typography>
      </Box>
      <Paper className={classes.editorContainer} variant="outlined">
        {/* <QuillEditor
          handleChange={handleChange}
          value={content}
          className={classes.editor}
        /> */}
      </Paper>
      {error && (
        <Box mt={2}>
          <FormHelperText error>{FormHelperText}</FormHelperText>
        </Box>
      )}
      <Box mt={6} display="flex">
        {onBack && (
          <Button onClick={onBack} size="large">
            Previous
          </Button>
        )}
        <Box flexGrow={1} />
        <Button
          color="secondary"
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          size="large">
          Complete
        </Button>
      </Box>
    </form>
  );
}

export default ProjectDescription;
