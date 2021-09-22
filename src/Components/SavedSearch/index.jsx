import React from 'react';
import './savedSearch.scss';
import PreviewSavedSearch from './PreviewSavedSearch';
import VisitorAlert from './VisitorAlert';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";

const RecentSearch = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  return (
    <div className="container__recent--search">
      <Typography variant="h5" color="primary">
        Recherches enregistrées
      </Typography>
      {isLogged ? (
        <div className="container__all--items">
          <ul className="all--items">
            <PreviewSavedSearch />
            <PreviewSavedSearch />
            <PreviewSavedSearch />
          </ul>
        </div>
      ) : (
        <div className="container__all--items">
          <div className="all--items">
            <VisitorAlert />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
