import React, { useEffect, useState } from 'react';
import './headerResultsCompanies.scss';

const HeaderCompaniesResults = ({company}) => {
  const [resultsMetrics, setResultsMetrics] = useState("");

  return (
    <header className="container__header__results--companies">
      <div className="container--left">
        <h1> Résultats</h1>        
      </div>
        {/*<div className="container__filter--right">
        <p>Sort by Date</p>
      </div>*/}
    </header>
  );
};

export default HeaderCompaniesResults;
