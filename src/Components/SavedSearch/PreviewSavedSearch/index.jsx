import React from 'react';
import ChipsArray from '../../CompaniesResults/CompanyPreview/ChipsArray';
import LeftSimpleArrow from '../../../Assets/Svg/UI/LeftSimpleArrow'

const PreviewSavedSearch = () => {

  return (
    <li className="recent--search--item">
      <div className="container__cta">
        <LeftSimpleArrow />
      </div>
      <div className="container__informations">
        <h3>23 Résultats</h3>
        <ChipsArray />
        <div className="container__date">
          <p>DATE: 13/11/2021</p>
          <p>18:12</p>
        </div>
      </div>
    </li>
  );
};

export default PreviewSavedSearch;
