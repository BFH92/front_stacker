import React, {useState} from 'react';
import './userDashboard.scss';
import SavedSearch from '../../Components/SavedSearch';
import UserPresentation from '../../Components/UserPresentation';
import { FilterContext } from '../../Context/FilterContext';

const UserDashboard = () => {
  return (
    <div className="">
      <div className="container__title-pane">Mon Dashboard</div>
        <div className="container__results--all">
          <UserPresentation />
          <SavedSearch />
        </div>
    </div>
  );
};

export default UserDashboard;
