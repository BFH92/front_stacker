import React from "react";
// Styles
import "./userDashboard.scss";
// Components
import UserPresentation from "../../Components/UserPresentation";
import FavoritesCompanies from "../../Components/FavoritesCompanies";
import CustomTypography from '../../Components/CustomTypography';

const UserDashboard = () => {
  return (
    <div className="container__dashboard--all">
      <header className="dashboard--header">
        <CustomTypography
          variant="h3"
          color="text.primary"
          content="Mon Dashboard"
          align="center"
        />
      </header>
      <div className="container__dashboard">
        <UserPresentation />
        <FavoritesCompanies />
      </div>
    </div>
  );
};

export default UserDashboard;
