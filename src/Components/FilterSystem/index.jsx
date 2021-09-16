import React,{useState,useEffect} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';
import NegativeRightIconButton from '../CTAs/NegativeRightIconButton';
import Save from '../../Assets/Svg/UI/Save';

const FilterSystem = () => {
  //TODO: use context pour set L'url
  const [stacks, setStacks] = useState([])
  console.log(stacks)
  const [staffSize, setStaffSize] = useState([])
  console.log(staffSize)
  useEffect(() => {
    const url = `http://localhost:3000/companies?stack=${stacks}&staff_size=${staffSize}`
    console.log(url)
  }, [stacks, staffSize]);
  return (
    <div className="container__filter--system">
      <div className="container--top">
        <div className="grid__filter--groups">
          <ChipsArray companies={{setStacks}}/>
          <RadioButtonsGroup companies={{staffSize,setStaffSize}}/>
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
