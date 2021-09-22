import React, { useState, useEffect } from 'react';
import './searchCompagny.scss';
import { FilterContext } from '../../Context/FilterContext';
import SavedSearch from '../../Components/SavedSearch';
import CompaniesResults from '../../Components/CompaniesResults';
import { API_URL } from '../../Config/API_URL';
import FilterSystem from '../../Components/FilterSystem';


const SearchCompany = () => {
  const [chipData, setChipData] = useState([]);
  const [url, setUrl] = useState(API_URL + 'companies?');
  const [staffSize, setStaffSize] = useState("")
  const [categories, setCategories] = useState("")
  const [filterStacks, setFilterStacks] = useState("")
  const [saveListener, setSaveListener] = useState(0)


  useEffect(() => {
    let urlParameters = [API_URL+ 'companies?']
    if (staffSize)(urlParameters.push(`staff_size=${staffSize}`))
    if (filterStacks)(urlParameters.push(`stack=${filterStacks}`))
    if (categories)(urlParameters.push(`categories=${categories}`))
    urlParameters = urlParameters.join("&")
    setUrl(urlParameters)

  }, [filterStacks, staffSize, categories]);
  return (
    <FilterContext.Provider value={{url, setUrl, chipData, setChipData,staffSize, setStaffSize, categories, setCategories,filterStacks, setFilterStacks,saveListener, setSaveListener}}>
    <div className="container__search--companies">
      <FilterSystem />
      <div className="container--right">
        <div className="container__results--all">
          <CompaniesResults/>
          <SavedSearch/>
        </div>
      </div>
    </div>
    </FilterContext.Provider>
  );
};

export default SearchCompany;
