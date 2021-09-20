import React from 'react';
// import AddToFavorite from '../../CTAs/AddToFavorite';
// import ChipsArray from './ChipsArray';
// import CompanyPreviewAvatar from './Avatar';

const CompanyPreview = (company) => {

  return(
    <div className="container__company--preview">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <p> Effectif Tech: {company.staff_size} personnes</p>
      <p>{company.website_link}</p>
      {company.stacks && company.stacks.map((stack)=>
        <div>{stack.name}</div>
      )}
      {/* <CompanyPreviewAvatar />
      <ChipsArray />
      <AddToFavorite /> */}
    </div>
  );
};

export default CompanyPreview;
