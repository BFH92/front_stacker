import React from 'react';
import './stack_preview.scss';
import AddToFavorite from '../../CTAs/AddToFavorite';

const StackPreview = ({stack}) => {

  return(
    <div className="container__preview--company">
      <div className="content--text">
        <div className="adress">
          <p>{stack.name}</p>
        </div>
      </div>
    </div>
  );
};

export default StackPreview;
