import React, { useState } from 'react';
import './headerResultsCompanies.scss';

const HeaderCompaniesResults = () => {
  const [howManyResults, setHowManyResults] = useState(9);

  return (
    <header className="container__header__results--companies">
      <div className="container--left">
        <h1>{howManyResults} Résultats</h1>        
      </div>
        {/*<div className="container__filter--right">
        <p>Sort by Date</p>
      </div>*/}
    </header>
  );
};

export default HeaderCompaniesResults;
