import React from "react";
//Styles
import './userPresentation.scss'
//components
import { EditUserForm } from "../Forms/EditUserForm";
//MaterialUI

const UserPresentation = () => {
  return (
    <div className="container__presentation--all">
      <div className="container__presentation">
        <EditUserForm />
      </div>
    </div>
  );
};

export default UserPresentation;
