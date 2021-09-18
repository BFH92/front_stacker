import React,{useState,useEffect, useContext} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';
import NegativeRightIconButton from '../CTAs/NegativeRightIconButton';
import Save from '../../Assets/Svg/UI/Save';
import { FilterContext } from '../../Context/FilterContext';
import { API_URL } from '../../Config/API_URL';
import { UserStacksContext } from '../../Context/UserStacksContext';
const FilterSystem = () => {
  //TODO: use context pour set L'url
  const {setUrl}= useContext(FilterContext);
  const {filterStacks}= useContext(FilterContext);
  
  const [staffSize, setStaffSize] = useState("")
  const [chipData, setChipData] = useState([]);

  
 
  useEffect(() => {
    let urlParameters = [API_URL+ 'companies?']
    if (staffSize)(urlParameters.push(`staff_size=${staffSize}`))
    if (filterStacks)(urlParameters.push(`stack=${filterStacks}`))
    
    urlParameters = urlParameters.join("&")
    console.log(urlParameters)
    setUrl(urlParameters)

  }, [filterStacks, staffSize, setUrl]);
  const addUserStackAuthorization = false
  return (
    <UserStacksContext.Provider value={{chipData , setChipData, addUserStackAuthorization}}>

    <div className="container__filter--system">
      <div className="container--top">
        <div className="grid__filter--groups">
          <ChipsArray/>
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
    </UserStacksContext.Provider>
  );
};

export default FilterSystem;
