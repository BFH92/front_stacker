import React from 'react';
import './companyPreview.scss';
import AddToFavorite from '../../CTAs/AddToFavorite';
import ChipsArray from './ChipsArray';
import CompanyPreviewAvatar from './Avatar';

const CompanyPreview = () => {

  return(
    <div className="container__company--preview">
      <div className="top--informations">
        <CompanyPreviewAvatar />
        <div className="text--informations">
          <h3>TheHackingProject</h3>
          <small>SARL</small>
        </div>
      </div>
      <ChipsArray />
      <div className="container__effectif">
        <div className="tags__title">
          Effectifs: 49+
        </div>
      </div>
      <AddToFavorite />
    </div>
  );
};

export default CompanyPreview;
