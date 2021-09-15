import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 22,
    padding: 0
  },
  switchBase: {
    padding: 2,
    color: 'rgb(92, 30, 226)',
    '& + $track': {
      backgroundColor: 'rgb(255, 255, 255)', // PAS DE VARIABLES
      opacity: 1,
      border: '1px solid rgb(92, 30, 226)',
    },
    '&$checked': {
      transform: 'translateX(16px)',
      color: 'rgb(255, 255, 255)', // PAS DE VARIABLES
      '& + $track': {
        backgroundColor: 'rgb(92, 30, 226)', // PAS DE VARIABLES
        opacity: 1,
        border: 'none',
      },
    },
    // '&$focusVisible $thumb': {
    //   color: '#52d869',
    //   border: '6px solid #fff',
    // },
  },
  thumb: {
    width: 18,
    height: 18,
  },
  track: {
    borderRadius: 22 / 2,
    border: `1px solid rgb(189, 189, 189)`, // PAS DE VARIABLES
    backgroundColor: 'rgb(246, 247, 254)', // PAS DE VARIABLES
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const ThemeSwitch = () => {
  const [state, setState] = useState(true);

  const handleChange = () => {
    setState(!state)
  };

  return (
    <div className="container__switch--theme">
      <IOSSwitch checked={state} onChange={handleChange} />
    </div>    
  );
};

export default ThemeSwitch;
