import React from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';
import Typography from '@material-ui/core/Typography';

const RecentSearch = () => {

  return (
    <div className="container__recent--search">
      <Typography variant="h5">
        Recherches enregistrées
      </Typography>
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
