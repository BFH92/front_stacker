import React,{useState,useEffect, useContext} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
import UIButton from '../../Components/UIButton';
import Divider from '@material-ui/core/Divider';
import { FilterContext } from '../../Context/FilterContext';
import { UserStacksContext } from '../../Context/UserStacksContext';
import SavedSearchesManager from '../../Services/RailsApi/SavedSearchesFetch';
import { useSelector } from "react-redux";
import { useSnackbar } from 'notistack';

const FilterSystem = () => {
  const {setUrl}= useContext(FilterContext);
  const {url}= useContext(FilterContext);

  const isLogged = useSelector(state => state.user.isLogged);
  
  const {chipData}= useContext(FilterContext);
  const {setChipData}= useContext(FilterContext);
  const {staffSize}= useContext(FilterContext);
  const {setStaffSize}= useContext(FilterContext);
  const {categories}= useContext(FilterContext);
  const {setCategories}= useContext(FilterContext);
  const {filterStacks}= useContext(FilterContext);
  const {setFilterStacks}= useContext(FilterContext);
  const {setSaveListener} = useContext(FilterContext);
  const {saveListener} = useContext(FilterContext);
  
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const saveSearch = async() => {
    try{
      const response = await SavedSearchesManager.saveSearch(filterStacks,staffSize,categories)
      let variant = 'success'
      let message = `Recherche sauvegardée !`
      setSaveListener(saveListener+1)
      enqueueSnackbar(message, { variant });
    }catch(error){
      let variant = 'info'
      let message = `Nous rencontrons une erreur la sauvegarde -> ${error}`
      if (String(error).includes("401"))(message = `Vous devez vous connecter pour sauvegarder votre recherche`)
      enqueueSnackbar(message, { variant });
    }
  }
  
  const [staffSizeValues, setStaffSizeValues] = useState([{name:"0-9",slug:"0-9"},{name:"10-49",slug:"10-49"},{name:"50-249",slug:"50-249"},{name:"250+",slug:"250more"}])
  const [categoriesValues, setCategoriesValues] = useState([{name:"Startup",slug:"1"},{name:"Entreprise conventionnelle",slug:"2"},{name:"SSII",slug:"3"},{name:"Agence web",slug:"4"},{name:"Grosse entreprise Tech", slug:"5"}]) //map un fetch des compnay_categories


  const addUserStackAuthorization = false

  return (
    <UserStacksContext.Provider value={{chipData , setChipData, addUserStackAuthorization, filterStacks, setFilterStacks}}>
      <div className="container__filter--system">
        <div className="container--top">
          <div className="grid__filter--groups">
            <ChipsArray/>
            <RadioButtonsGroup companies={{filter:"Effectifs",state:staffSize, setState:setStaffSize, value:staffSizeValues }}/>            
            <RadioButtonsGroup companies={{filter:"Type d'entreprise",state:categories, setState:setCategories, value:categoriesValues }}/>
          </div>
        </div>
        <Divider />
        <div className="container--bottom">
          <div className="container__cta">
            <UIButton
              variant="outlined"
              size="small"
              content="enregistrer"
              color="inherit"
              onClick={saveSearch}
            />
          </div>
        </div>
      </div>    
    </UserStacksContext.Provider>
  );
};

export default FilterSystem;
