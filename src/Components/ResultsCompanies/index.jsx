import React from 'react';
import './resultsCompanies.scss';
import HeaderResultsCompanies from '../HeaderResultsCompanies';
import PreviewCompany from '../PreviewCompany';

const ResultsCompanies = () => {

  return (
    <div className="results__main--grid">
      <HeaderResultsCompanies />
      <div className="results--all">
        <div className="all--items">
          <PreviewCompany />
          <PreviewCompany />
          <PreviewCompany />
        </div>
      </div>
    </div>
  );
};

export default ResultsCompanies;
