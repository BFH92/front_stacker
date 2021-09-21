import React from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';

const RecentSearch = () => {

  return (
    <div className="container__recent--search">
      <h2>Recherches enregistrées</h2>
      <div className="container__all--items">
        <ul className="all--items">
          <PreviewSavedSearch />
          <PreviewSavedSearch />
          <PreviewSavedSearch />
        </ul>
      </div>
    </div>
  );
};

export default RecentSearch;
