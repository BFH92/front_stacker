import React, { useState } from 'react';
import './filterSystem.scss';
import RadioButtonsGroup from './RadioGroup';
import SimpleSlider from './SimpleSlider';
import ChipsArray from './ChipsArray';

const FilterSystem = () => {

  return (
    <div className="container_filter--system">
      <div className="grid__filter--groups">
        <ChipsArray />
        <RadioButtonsGroup />
        <SimpleSlider />
      </div>
    </div>    
  );
};

export default FilterSystem;
