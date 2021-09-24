import React from "react";
import CompanyPresentation from "../../Components/CompanyPresentation";

const CompanyDashboard = () => {
  return (
    <div className="">
      <div className="container__title-pane">Company Dashboard</div>
      <div className="container__results--all">
        <CompanyPresentation />
      </div>
    </div>
  );
};

export default CompanyDashboard;
