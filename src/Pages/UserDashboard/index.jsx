import React, {useState} from 'react';
import './userDashboard.scss';
import SavedSearch from '../../Components/SavedSearch';
import UserPresentation from '../../Components/UserPresentation';
import { FilterContext } from '../../Context/FilterContext';
import FavoritesCompanies from '../../Components/FavoritesCompanies';
import { Typography } from '@material-ui/core';

const UserDashboard = () => {
  return (
    <div className="">
      <Typography className="container__title-pane" variant="h3" color="primary">Mon Dashboard</Typography>
        <div className="container__results--all">
          <UserPresentation/>
          <FavoritesCompanies/>
          <SavedSearch />
        </div>
    </div>
  );
};

export default UserDashboard;
