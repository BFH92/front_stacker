import React from "react";
//Styles
import './companyPresentation.scss'
//Components
import { EditCompanyForm } from "../Forms/EditCompanyForm";

const CompanyPresentation = () => {
  return (
    <div className="container__presentation--all">
      <div className="container__presentation">
        <EditCompanyForm />
      </div>
    </div>
  );
};

export default CompanyPresentation;
