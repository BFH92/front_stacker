import React, { useState,useLayoutEffect,useEffect, useCallback } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '../../../Assets/Svg/UI/Favorite/FavoriteBorder';
import FavoriteFill from '../../../Assets/Svg/UI/Favorite/FavoriteFill';
import FavoritesManager from '../../../Services/RailsApi/FavoritesFetch';

const AddToFavorite = (company) => {
  const [isFavorite, setIsFavorite] = useState(false);

    const SetFavorite = () => {
      setIsFavorite(!isFavorite)
      if(isFavorite)(FavoritesManager.deleteFavorite(3))
      else(FavoritesManager.createFavorite(3))
    };
  
    
  return (   
    <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<FavoriteFill/>} />}
      label="Ajouter aux favoris" labelPlacement="start"
      checked={isFavorite}
      onChange={SetFavorite}
    />
  );
};

export default AddToFavorite;
