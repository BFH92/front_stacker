import React from 'react';
import './resultsCompanies.scss';
import HeaderResultsCompanies from '../HeaderResultsCompanies';
import PreviewCompany from '../PreviewCompany';
import ProgressBar from '../Loaders/ProgressBar';
import ProgressCircle from '../Loaders/ProgressCircle';

const ResultsCompanies = () => {

  return (
    <div className="results__main--grid">
      <HeaderResultsCompanies />
      <ProgressBar />
      <ProgressCircle />
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
