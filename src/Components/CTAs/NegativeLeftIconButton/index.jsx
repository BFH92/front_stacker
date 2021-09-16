import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const NegativeCustomizedButton = withStyles({
  root: {
    borderRadius: 50,
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '2px solid rgb(255, 255, 255)',
    backgroundColor: 'rgb(92, 30, 226)',
    color: 'rgb(255, 255, 255)',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
})(Button);

const NegativeLeftIconButton = (props) => {

  return (
    <div>
      <NegativeCustomizedButton
        startIcon={props.svg}
      >
        {props.name}
      </NegativeCustomizedButton>
    </div>
  );
};

export default NegativeLeftIconButton;

