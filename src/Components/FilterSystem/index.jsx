import React,{useState,useEffect, useContext} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
// import SimpleSlider from './SimpleSlider';
import UIButton from '../../Components/UIButton';
import Divider from '@material-ui/core/Divider';
import { FilterContext } from '../../Context/FilterContext';
import { API_URL } from '../../Config/API_URL';
import { UserStacksContext } from '../../Context/UserStacksContext';

const FilterSystem = () => {
  
  const {chipData}= useContext(FilterContext);
  const {setChipData}= useContext(FilterContext);
  const {staffSize}= useContext(FilterContext);
  const {setStaffSize}= useContext(FilterContext);
  const {categories}= useContext(FilterContext);
  const {setCategories}= useContext(FilterContext);
  const {filterStacks}= useContext(FilterContext);
  const {setFilterStacks}= useContext(FilterContext);

  
  const [staffSizeValues, setStaffSizeValues] = useState([{name:"0-9",slug:"0-9"},{name:"10-49",slug:"10-49"},{name:"50-249",slug:"50-249"},{name:"250+",slug:"250more"}])
  //const [chipData, setChipData] = useState([]);
  const [categoriesValues, setCategoriesValues] = useState([{name:"Startup",slug:"1"},{name:"Entreprise conventionnelle",slug:"2"},{name:"SSII",slug:"3"},{name:"Agence web",slug:"4"},{name:"Grosse entreprise Tech", slug:"5"}]) //map un fetch des compnay_categories


  const addUserStackAuthorization = false
  return (
    <UserStacksContext.Provider value={{chipData , setChipData, addUserStackAuthorization, filterStacks, setFilterStacks}}>
      <div className="container__filter--system">
        <div className="container--top">
          <div className="grid__filter--groups">
            <ChipsArray/>
            <Divider />
            <RadioButtonsGroup companies={{filter:"Effectifs",state:staffSize, setState:setStaffSize, value:staffSizeValues }}/>
            <Divider />
            <RadioButtonsGroup companies={{filter:"Type d'entreprise",state:categories, setState:setCategories, value:categoriesValues }}/>
            {/* <SimpleSlider /> */}
          </div>
        </div>
        <div className="container--bottom">
          <div className="container__cta">
            <UIButton
              variant="outlined"
              size="small"
              content="enregistrer"
              color="inherit"
            />
          </div>
        </div>
      </div>    
    </UserStacksContext.Provider>
  );
};

export default FilterSystem;
