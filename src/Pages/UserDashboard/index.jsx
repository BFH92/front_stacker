import React from 'react';
import './userDashboard.scss';
import UserPresentation from '../../Components/UserPresentation';
import FavoritesCompanies from '../../Components/FavoritesCompanies';
import { Typography } from '@material-ui/core';

const UserDashboard = () => {
  return (
    <div className="">
      <Typography className="container__title-pane" variant="h3" color="primary">Mon Dashboard</Typography>
        <div className="container__results--all">
          <UserPresentation/>
          <FavoritesCompanies/>
        </div>
    </div>
  );
};

export default UserDashboard;
