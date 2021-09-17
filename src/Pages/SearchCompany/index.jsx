import React from 'react';
import './searchCompagny.scss';
import FilterSystem from '../../Components/FilterSystem';
import RecentSearch from '../../Components/RecentSearch';
import ResultsCompanies from '../../Components/ResultsCompanies';

const SearchCompany = () => {

  return (
    <div className="container__search--companies">
      <FilterSystem />
      <div className="container--right">
        <div className="container__results--all">
          <ResultsCompanies />
          <RecentSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchCompany;
