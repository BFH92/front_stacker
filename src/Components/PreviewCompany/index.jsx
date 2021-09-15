import React from 'react';
import './previewCompany.scss';
import AddToFavorite from '../CTAs/AddToFavorite';

const PreviewCompany = ({company}) => {

  return(
    <div className="container__preview--company">
      <AddToFavorite />
      <div className="content--text">
        <div className="adress">
          <h3>{company.name}</h3>
          <br />
          <h4>Presentation de la boite:</h4>
          <p>{company.description}</p>
          <br />
          <h4>Taille de l'entreprise</h4>
          <p> {company.staff_size} employé</p>
          <br />
        </div>
        <div className="price"><h4>Lien de l'entreprise</h4><p>{company.website_link}</p></div>
      </div>
    </div>
  );
};

export default PreviewCompany;
