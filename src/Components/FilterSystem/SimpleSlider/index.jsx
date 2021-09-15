import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const WhiteSlider = withStyles({
  root: {
    color: 'rgb(92, 30, 226)', //PAS DE VARIABLES
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: 'rgb(92, 30, 226)',
    border: '2px solid rgb(255, 255, 255)',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 2px)',
  },
  track: {
    color: 'rgb(255, 255, 255)',
    height: 4,
    borderRadius: 4,
  },
  rail: {
    color: 'rgba(255, 255, 255, 0.35)',
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const SimpleSlider = () => {

  return (
    <div className="container__filter--group inline--grid">
      <label htmlFor="" className="title__filter">Slider</label>
      <WhiteSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
    </div>    
  );
};

export default SimpleSlider;


