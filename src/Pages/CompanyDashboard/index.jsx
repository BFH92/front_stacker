import React from 'react';
import Header from '../../Components/Header';
import CompanyPresentation from '../../Components/CompanyPresentation';
import RecentSearch from '../../Components/RecentSearch';

const CompanyDashboard = () => {

  return (
    <div className="">
      <div className="container__title-pane">Company Dashboard</div>
        <div className="container__results--all">
        <CompanyPresentation />
        <RecentSearch />
        </div>
    </div>
  );
};

export default CompanyDashboard;
