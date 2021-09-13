import React, { useState } from 'react';
import './headerResultsCompanies.scss';

const HeaderResultsCompanies = () => {
  const [howManyResults, setHowManyResults] = useState(9);
  const [howManyCompanies, setHowManyCompanies] = useState(99);

  return (
    <header className="container__header__results--companies">
      <div className="container--left">
        {howManyResults} entreprises sur {howManyCompanies} correspondent à vos critères.
      </div>
      <div className="container--right">
        
      </div>
    </header>
  );
};

export default HeaderResultsCompanies;
