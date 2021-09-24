import React, { useState, useEffect } from 'react';
import './searchCompany.scss';
import { API_URL } from '../../Config/API_URL';
import { FilterContext } from '../../Context/FilterContext';
import FilterSystem from '../../Components/FilterSystem';
import CompaniesResults from '../../Components/CompaniesResults';
import SavedSearch from '../../Components/SavedSearch';

const SearchCompany = () => {
  const [chipData, setChipData] = useState([]);
  const [url, setUrl] = useState(API_URL + 'companies?');
  const [staffSize, setStaffSize] = useState("");
  const [categories, setCategories] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [filterStacks, setFilterStacks] = useState("");
  const [saveListener, setSaveListener] = useState(0);

  useEffect(() => {

    let urlParameters = ['/companies?']
    if (staffSize)(urlParameters.push(`staff_size=${staffSize}`))
    if (filterStacks)(urlParameters.push(`stack=${filterStacks}`))
    if (categories)(urlParameters.push(`categories=${categories}`))
    urlParameters = urlParameters.join("&")
    setUrl(urlParameters)
  }, [filterStacks, staffSize, categories]);
  
  return (
    <FilterContext.Provider
      value={{
        url,
        setUrl,
        chipData,
        setChipData,
        staffSize,
        setStaffSize,
        categories,
        setCategories,
        filterStacks,
        setFilterStacks,
        saveListener, 
        setSaveListener,
        categoryName,
        setCategoryName
      }}
    >
    <div className="container__search--companies">
      <FilterSystem />
      <div className="container--right">
        <div className="container__results--all">
          <SavedSearch />
          <CompaniesResults/>
        </div>
      </div>
    </div>
    </FilterContext.Provider>
  );
};

export default SearchCompany;
