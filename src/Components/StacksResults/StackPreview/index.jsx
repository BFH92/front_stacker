import React from 'react';
import './stack_preview.scss';
import AddToFavorite from '../../CTAs/AddToFavorite';

const StackPreview = ({stack}) => {

  return(

      <div>
          <p>{stack.name}</p>
      </div>

  );
};

export default StackPreview;
