import React from 'react';
import './searchCompagny.scss';
import FilterSystem from '../../Components/FilterSystem';
import Header from '../../Components/Header';
import RecentSearch from '../../Components/RecentSearch';
import ResultsCompanies from '../../Components/ResultsCompanies';


const SearchCompany = () => {

  
  
  return (
    <div className="container__search--companies">
      <FilterSystem />
      <div className="container--right">
        <Header />
        <div className="container__results--all">
          <ResultsCompanies />
          <RecentSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchCompany;
