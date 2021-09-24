import React from "react";
// Styles
import "./userDashboard.scss";
// Components
import UserPresentation from "../../Components/UserPresentation";
import FavoritesCompanies from "../../Components/FavoritesCompanies";
//Material UI
import { Typography } from "@material-ui/core";

const UserDashboard = () => {
  return (
    <div className="">
      <Typography
        className="container__title-pane"
        variant="h3"
        color="primary"
      >
        Mon Dashboard
      </Typography>
      <div className="container__results--all">
        <UserPresentation />
        <FavoritesCompanies />
      </div>
    </div>
  );
};

export default UserDashboard;
