import React, {useState, useEffect, useContext} from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';
import VisitorAlert from './VisitorAlert';
import Typography from '@material-ui/core/Typography';
import SavedSearchesManager from '../../Services/RailsApi/SavedSearchesFetch';
import { FilterContext } from '../../Context/FilterContext';
import { useSelector } from "react-redux";

const RecentSearch = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  const {saveListener}= useContext(FilterContext);
  const [savedSearches, setSavedSearches] = useState("")

  useEffect(() => {
    if (isLogged)(getSavedSearches())
    //fetch api pour avoir les saved_Search de l'user en cours
    
  }, [saveListener]);

  const getSavedSearches = async() => {
    const response = await SavedSearchesManager.getSavedSearchesOfCurrentUser()
    setSavedSearches(response.data)
    console.log(response.data)
  }

  return (
    <div className="container__recent--search">
      <Typography variant="h5" color="primary">
        Recherches enregistrées
      </Typography>
      
      {isLogged ? (
        <div className="container__all--items">
        <ul className="all--items">
          {savedSearches && savedSearches.map((savedSearch)=>
          <li key={savedSearch.id} >
           <PreviewSavedSearch data={savedSearch}/>
           </li>
          ) }
        </ul>
      </div>
      ) : (
        <div className="container__all--items">
          <div className="all--items">
            <VisitorAlert />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
