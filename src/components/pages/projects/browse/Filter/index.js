import React from 'react';

import {
  Box,
  Card,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import clsx from 'clsx';

import MultiSelect from './MultiSelect';

const selectOptions = [
  {
    label: 'Type',
    options: ['Freelance', 'Full Time', 'Part Time', 'Internship'],
  },
  {
    label: 'Level',
    options: ['Novice', 'Expert'],
  },
  {
    label: 'Location',
    options: [
      'Africa',
      'Asia',
      'Australia',
      'Europe',
      'North America',
      'South America',
    ],
  },
  {
    label: 'Roles',
    options: ['Android', 'Web Developer', 'iOS'],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    marginLeft: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

function Filter({ className, ...rest }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const [chips, setChips] = React.useState([
    'Freelance',
    'Full Time',
    'Novice',
    'Europe',
    'Android',
    'Web Developer',
  ]);

  const handleInputChange = (event) => {
    event.persist();
    setInputValue(event.target.value);
  };

  const handleInputKeyup = (event) => {
    event.persist();

    if (event.keyCode === 13 && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips((prevChips) => [...prevChips, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleChipDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((prevChip) => chip !== prevChip));
  };

  const handleMultiSelectChange = (value) => {
    setChips(value);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={2} display="flex" alignItems="center">
        <SearchIcon />
        <Input
          disableUnderline
          fullWidth
          className={classes.searchInput}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyup}
          placeholder="Enter a keyword"
          value={inputValue}
        />
      </Box>
      <Divider />
      <Box p={2} display="flex" alignItems="center" flexWrap="wrap">
        {chips.map((chip) => (
          <Chip
            className={classes.chip}
            key={chip}
            label={chip}
            onDelete={() => handleChipDelete(chip)}
          />
        ))}
      </Box>
      <Divider />
      <Box display="flex" alignItems="center" flexWrap="wrap" p={1}>
        {selectOptions.map((option) => (
          <MultiSelect
            key={option.label}
            label={option.label}
            onChange={handleMultiSelectChange}
            options={option.options}
            value={chips}
          />
        ))}
        <Box flexGrow={1} />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="In network"
        />
      </Box>
    </Card>
  );
}

export default Filter;
