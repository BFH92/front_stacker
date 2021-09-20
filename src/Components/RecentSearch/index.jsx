import React from 'react';
import './recentSearch.scss';
import PreviewRecentSearch from './PreviewRecentSearch';
import Typography from '@mui/material/Typography';

const RecentSearch = () => {

  return (
    <div className="container__recent--search">
      <Typography variant="h5" component="h5">
        Recherches enregistrées
      </Typography>
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
