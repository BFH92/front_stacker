import React from 'react';
import './userDashboard.scss';
import Header from '../../Components/Header';
import RecentSearch from '../../Components/RecentSearch';

const UserDashboard = () => {

  return (
    <div className="">
      <Header />
      <div className="container__title-pane">My Dashboard</div>
      
      <div className="card">
        <h2>Mes Stacks</h2> {/*user stacks component avec icônes des stacks en grid*/}
      </div>
      <div className="card">
        <RecentSearch/>
      </div>
    </div>
  );
};

export default UserDashboard;
