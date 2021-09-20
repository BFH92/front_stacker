import React, { useEffect, useState } from 'react';

const HeaderCompaniesResults = ({company}) => {
  const [resultsMetrics, setResultsMetrics] = useState("");
  useEffect(() => {
  if (company !== null) (setResultsMetrics(company.length))
  }, [company]);

  return (
    <header className="container__header__results--companies">
      {/* <div className="container--left"> */}
        <h1> {resultsMetrics} Résultats</h1>        
      {/* </div> */}
        {/*<div className="container__filter--right">
        <p>Sort by Date</p>
      </div>*/}
    </header>
  );
};

export default HeaderCompaniesResults;
