import React,{useState,useEffect, useContext} from 'react';
import './filterSystem.scss';
import ChipsArray from './ChipsArray';
import RadioButtonsGroup from './RadioGroup';
import UIButton from '../../Components/UIButton';
import Divider from '@material-ui/core/Divider';
import { FilterContext } from '../../Context/FilterContext';
import { API_URL } from '../../Config/API_URL';
import { UserStacksContext } from '../../Context/UserStacksContext';
import { useSelector } from "react-redux";
import { useSnackbar } from 'notistack';

const FilterSystem = () => {
  const {setUrl}= useContext(FilterContext);
  const {url}= useContext(FilterContext);

  const isLogged = useSelector(state => state.user.isLogged);
  
  const [staffSize, setStaffSize] = useState("")
  const [staffSizeValues, setStaffSizeValues] = useState([{name:"0-9",slug:"0-9"},{name:"10-49",slug:"10-49"},{name:"50-249",slug:"50-249"},{name:"250+",slug:"250more"}])
  const [chipData, setChipData] = useState([]);
  const [categories, setCategories] = useState("")
  const [categoriesValues, setCategoriesValues] = useState([{name:"Startup",slug:"1"},{name:"Entreprise conventionnelle",slug:"2"},{name:"SSII",slug:"3"},{name:"Agence web",slug:"4"},{name:"Grosse entreprise Tech", slug:"5"}]) //map un fetch des compnay_categories
  const [filterStacks, setFilterStacks] = useState("")

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => () => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    let urlParameters = [API_URL+ 'companies?']
    if (staffSize)(urlParameters.push(`staff_size=${staffSize}`))
    if (filterStacks)(urlParameters.push(`stack=${filterStacks}`))
    if (categories)(urlParameters.push(`categories=${categories}`))
    urlParameters = urlParameters.join("&")
    console.log(urlParameters)
    setUrl(urlParameters)

  }, [filterStacks, staffSize, categories]);
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
            {isLogged ? (
              <UIButton
                variant="outlined"
                size="small"
                content="enregistrer"
                color="inherit"
                onClick={handleClickVariant('La recherche a bien été sauvegardée.','success')}
              />
            ) : (
              <UIButton
                variant="outlined"
                size="small"
                content="enregistrer"
                color="inherit"
                onClick={handleClickVariant('Tu dois être connecté pour pouvoir sauvegarder ta recherche.','warning')}
              />
            )}
          </div>
        </div>
      </div>    
    </UserStacksContext.Provider>
  );
};

export default FilterSystem;
