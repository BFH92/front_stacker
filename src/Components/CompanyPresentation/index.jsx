import React from "react";
//Styles
import './companyPresentation.scss'
//Components
import { EditCompanyForm } from "../Forms/EditCompanyForm";
//MaterialUI
import { Typography } from "@material-ui/core";
const CompanyPresentation = () => {
  return (
    <div className="company-presentation__main--grid">
      <Typography variant="h4" color="primary" mb={5}>Presentation</Typography>
      <div className="presentation--all">
        <div className="all--items">
          <ul>
            <EditCompanyForm />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyPresentation;
