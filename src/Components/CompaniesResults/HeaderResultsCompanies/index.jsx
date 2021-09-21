import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

const HeaderCompaniesResults = ({company}) => {
  const [resultsMetrics, setResultsMetrics] = useState("");
  useEffect(() => {
  if (company !== null) (setResultsMetrics(company.length))
  }, [company]);

  return (
    <header className="container__header__results--companies">
      {/* <div className="container--left"> */}
        <Typography variant="h3" color="primary">
          {resultsMetrics} résultats
        </Typography>
      {/* </div> */}
        {/*<div className="container__filter--right">
        <p>Sort by Date</p>
      </div>*/}
    </header>
  );
};

export default HeaderCompaniesResults;
