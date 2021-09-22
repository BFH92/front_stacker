import React from 'react';
import './userDashboard.scss';
import UserPresentation from '../../Components/UserPresentation';
import FavoritesCompanies from '../../Components/FavoritesCompanies';

const UserDashboard = () => {
  return (
    <div className="">
      <div className="container__title-pane">Mon Dashboard</div>
        <div className="container__results--all">
          <UserPresentation/>
          <FavoritesCompanies/>
        </div>
    </div>
  );
};

export default UserDashboard;
