import React, { useState } from 'react';
import './headerResultsCompanies.scss';

const HeaderResultsCompanies = () => {
  const [howManyResults, setHowManyResults] = useState(9);
  const [howManyCompanies, setHowManyCompanies] = useState(99);

  return (
    <header className="container__header__results--companies">
      <div className="container--left">
        <h1>{howManyResults} sur {howManyCompanies} entreprises.</h1>        
      </div>
      <div className="container__filter--right">
        <p>Sort by Date</p>
      </div>
    </header>
  );
};

export default HeaderResultsCompanies;
