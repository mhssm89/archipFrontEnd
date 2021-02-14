import React from 'react';

import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  Paper,
  Radio,
  Typography,
} from '@material-ui/core';

import clsx from 'clsx';

const typeOptions = [
  {
    value: 'freelancer',
    title: "I'm a freelancer",
    description: "I'm looking for teamates to join in a personal project",
  },
  {
    value: 'projectOwner',
    title: 'I’m a project owner',
    description:
      "I'm looking for freelancer or contractors to take care of my project",
  },
  {
    value: 'affiliate',
    title: 'I want to join affiliate',
    description:
      "I'm looking for freelancer or contractors to take care of my project",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  typeOption: {
    alignItems: 'flex-start',
    display: 'flex',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  stepButton: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function UserDetails({
  className,
  onBack = () => {},
  onNext = () => {},
  ...rest
}) {
  const classes = useStyles();
  const [type, setType] = React.useState(typeOptions[1].value);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (newType) => {
    setType(newType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);

      // NOTE: Make API request

      if (onNext) {
        onNext();
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
      <Box mt={2}>
        {typeOptions.map((typeOption) => (
          <Paper
            className={classes.typeOption}
            elevation={type === typeOption.value ? 10 : 1}
            key={typeOption.value}>
            <Radio
              checked={type === typeOption.value}
              onClick={() => handleChange(typeOption.value)}
            />
            <Box ml={2}>
              <Typography gutterBottom variant="h5" color="textPrimary">
                {typeOption.title}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {typeOption.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
      {error && (
        <Box mt={2}>
          <FormHelperText error>{error}</FormHelperText>
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
          Next
        </Button>
      </Box>
    </form>
  );
}

export default UserDetails;
