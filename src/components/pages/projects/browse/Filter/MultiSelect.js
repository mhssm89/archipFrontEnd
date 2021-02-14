import React from 'react';

import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuItem: {
    padding: 0,
  },
  formControlLabel: {
    padding: theme.spacing(0.5, 2),
    width: '100%',
    margin: 0,
  },
}));

function MultiSelect({ label, options, value, onChange }) {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event) => {
    let newValue = [...value];

    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = newValue.filter((item) => item !== event.target.value);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <Button onClick={handleMenuOpen} ref={anchorRef}>
        {label}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ style: { width: 250 } }}>
        {options.map((option) => (
          <MenuItem className={classes.menuItem} key={option}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={value.indexOf(option) > -1}
                  onChange={handleOptionToggle}
                  value={option}
                />
              }
              label={option}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MultiSelect;
