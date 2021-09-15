import React from 'react';
import './userDashboard.scss';
import Header from '../../Components/Header';
import RecentSearch from '../../Components/RecentSearch';
import UserPresentation from '../../Components/UserPresentation';

const UserDashboard = () => {

  return (
    <div className="">
      <Header />
      <div className="container__title-pane">Mon Dashboard</div>
        <div className="container__results--all">
          <UserPresentation />
          <RecentSearch />
        </div>
    </div>
  );
};

export default UserDashboard;
