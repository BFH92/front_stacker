import React from 'react';
import './recentSearch.scss';
import PreviewRecentSearch from '../PreviewRecentSearch';

const RecentSearch = () => {

  return (
    <div className="container__recent--search">
      <h2>Recherches enregistrées</h2>
      <div className="container__all--items">
        <ul className="all--items">
          <PreviewRecentSearch />
          <PreviewRecentSearch />
          <PreviewRecentSearch />
        </ul>
      </div>
    </div>
  );
};

export default RecentSearch;
