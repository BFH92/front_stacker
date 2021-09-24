import React from "react";
import CompanyPresentation from "../../Components/CompanyPresentation";
import CustomTypography from '../../Components/CustomTypography';

const CompanyDashboard = () => {
  return (
    <div className="container__dashboard--all">
      <header className="dashboard--header">
        <CustomTypography
          variant="h3"
          color="text.primary"
          content="Dashboard Entreprise"
          align="center"
        />
      </header>
      <div className="container__dashboard--company">
        <CompanyPresentation />
      </div>
    </div>
  );
};

export default CompanyDashboard;
