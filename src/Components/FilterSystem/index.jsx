import React from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';

const FilterSystem = () => {

  return (
    <div className="container_filter--system">
      <div className="grid__filter--groups">
        <ChipsArray />
        <RadioButtonsGroup />
        {/* <SimpleSlider /> */}
      </div>
    </div>    
  );
};

export default FilterSystem;
