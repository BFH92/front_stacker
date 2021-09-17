import React from 'react';
import Header from '../../Components/Header';
import CompanyPresentation from '../../Components/CompanyPresentation';

const CompanyDashboard = () => {

  return (
    <div className="">
      <Header />
      <div className="container__title-pane">Company Dashboard</div>
      <CompanyPresentation />
    </div>
  );
};

export default CompanyDashboard;
