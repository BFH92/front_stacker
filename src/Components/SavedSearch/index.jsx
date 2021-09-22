import React, {useState, useEffect, useContext} from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';
import Typography from '@material-ui/core/Typography';
import SavedSearchesManager from '../../Services/RailsApi/SavedSearchesFetch';
import { FilterContext } from '../../Context/FilterContext';

const RecentSearch = () => {

  const {saveListener}= useContext(FilterContext);
  const [savedSearches, setSavedSearches] = useState("")

  useEffect(() => {
    getSavedSearches()
    //fetch api pour avoir les saved_Search de l'user en cours
    
  }, [saveListener]);

  const getSavedSearches = async() => {
    const response = await SavedSearchesManager.getSavedSearchesOfCurrentUser()
    console.log(response)
    setSavedSearches(response.data)
  }

  return (
    <div className="container__recent--search">
      <Typography variant="h5">
        Recherches enregistrées
      </Typography>
      <div className="container__all--items">
        <ul className="all--items">
          {savedSearches && savedSearches.map((savedSearch)=>
          <li key={savedSearch.id} >
           <PreviewSavedSearch data={savedSearch}/>
           </li>
          ) }
        </ul>
      </div>
    </div>
  );
};

export default RecentSearch;
