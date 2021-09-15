import React from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';
import NegativeRightIconButton from '../CTAs/NegativeRightIconButton';
import Save from '../../Assets/Svg/UI/Save';

const FilterSystem = () => {

  return (
    <div className="container__filter--system">
      <div className="container--top">
        <div className="grid__filter--groups">
          <ChipsArray />
          <RadioButtonsGroup />
          {/* <SimpleSlider /> */}
        </div>
      </div>
      <div className="container--bottom">
        <div className="container__cta">
          <NegativeRightIconButton name={"Enregistrer"} svg={<Save />}/>
        </div>
      </div>
    </div>    
  );
};

export default FilterSystem;
