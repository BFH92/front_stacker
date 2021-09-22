import React, { useState,useContext,useEffect, useCallback } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '../../../Assets/Svg/UI/Favorite/FavoriteBorder';
import FavoriteFill from '../../../Assets/Svg/UI/Favorite/FavoriteFill';
import './addToFavorite.scss'
import FavoritesManager from '../../../Services/RailsApi/FavoritesFetch';
import { FavoriteContext } from '../../../Context/FavoriteContext';


const AddToFavorite = ({ company, snackbarDelete, snackbarAdd }) => {
  
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    getFavoriteStatus(company.id)
  }, []);

  const getFavoriteStatus = async(company_id) =>{
    const response = await FavoritesManager.getId(company_id)
    if (response.data!==null)(setIsFavorite(true))
  }

  const SetFavorite = () => {
    if(isFavorite)(FavoritesManager.deleteFavorite(company.id))
    else(FavoritesManager.createFavorite(company.id))
    setIsFavorite(!isFavorite)
  };
  
  return (
    <>
      {isFavorite ? (
        <FormControlLabel
          className="label__no--margin"
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteFill />} />}
          checked={isFavorite}
          onChange={SetFavorite}
          onClick={snackbarDelete}
        />
      ) : (
        <FormControlLabel
          className="label__no--margin"
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteFill />} />}
          checked={isFavorite}
          onChange={SetFavorite}
          onClick={snackbarAdd}
        />
      )}
    </>
  );
};

export default AddToFavorite;
