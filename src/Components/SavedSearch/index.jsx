import React, {useState, useEffect, useContext} from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';
import VisitorAlert from './VisitorAlert';
import SavedSearchesManager from '../../Services/RailsApi/SavedSearchesFetch';
import { FilterContext } from '../../Context/FilterContext';
import { useSelector } from "react-redux";
import NoSavedSearch from './NoSavedSearch';

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
  }

  return (
    <div className="container__recent--search">
      {/* <Typography variant="h5" color="primary">
        Recherches enregistrées
      </Typography>       */}
      {isLogged ? (
        <div className="container__all--items">
        <ul className="all--items">
          {savedSearches.length ? (
            savedSearches && savedSearches.map((savedSearch) =>
              <li key={savedSearch.id} >
                <PreviewSavedSearch data={savedSearch}/>
              </li>
            )
          ) : (
            <NoSavedSearch/>
          )}
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
