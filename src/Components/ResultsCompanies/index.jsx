import React from 'react';
import './resultsCompanies.scss';
import HeaderResultsCompanies from './HeaderResultsCompanies';
import CompanyPreview from './CompanyPreview';
// import ProgressBar from '../Loaders/ProgressBar';
// import ProgressCircle from '../Loaders/ProgressCircle';

const ResultsCompanies = () => {

  return (
    <div className="results__main--grid">
      <HeaderResultsCompanies />
      {/* <ProgressBar />
      <ProgressCircle /> */}
      <div className="results--all">
        <div className="all--items">
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
          <CompanyPreview />
        </div>
      </div>
    </div>
  );
};

export default ResultsCompanies;
