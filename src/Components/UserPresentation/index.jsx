import React from "react";
//Styles
import './userPresentation.scss'
//components
import { EditUserForm } from "../Forms/EditUserForm";
//MaterialUI
import { Typography } from "@material-ui/core";

const UserPresentation = () => {
  return (
    <div className="presentation__main--grid">
      <Typography variant="h4" color="primary" mb={5}>
        Présentation
      </Typography>
      <div className="presentation--all">
        <div className="all--items">
          <ul>
            <EditUserForm />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPresentation;
