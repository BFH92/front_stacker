import React,{useState,useEffect, useContext} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';
import NegativeRightIconButton from '../CTAs/NegativeRightIconButton';
import Save from '../../Assets/Svg/UI/Save';
import { FilterContext } from '../../Context/FilterContext';
import { API_URL } from '../../Config/API_URL';
const FilterSystem = () => {
  //TODO: use context pour set L'url
  const {setUrl}= useContext(FilterContext);
  
  const [stacks, setStacks] = useState([])
  const [staffSize, setStaffSize] = useState("")

  console.log(stacks)
  console.log(staffSize)
  
  useEffect(() => {
    if (stacks && staffSize)
    (setUrl(API_URL+`companies?stack=${stacks}&staff_size=${staffSize}`))
    else if (stacks)
    (setUrl(API_URL+`companies?stack=${stacks}`))
    else if (staffSize)
    (setUrl(API_URL+`companies?staff_size=${staffSize}`))
    else
    (setUrl(API_URL+'companies'))
  }, [stacks, staffSize, setUrl]);

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
