import React, { useState,useContext,useEffect, useCallback } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '../../../Assets/Svg/UI/Favorite/FavoriteBorder';
import FavoriteFill from '../../../Assets/Svg/UI/Favorite/FavoriteFill';
import FavoritesManager from '../../../Services/RailsApi/FavoritesFetch';
import { FavoriteContext } from '../../../Context/FavoriteContext';


const AddToFavorite = ({company}) => {
  
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
    <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<FavoriteFill/>} />}
      label="Ajouter aux favoris" labelPlacement="start"
      checked={isFavorite}
      onChange={SetFavorite}
    />
  );
};

export default AddToFavorite;
