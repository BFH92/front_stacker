import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '../../../Assets/Svg/UI/Favorite/FavoriteBorder';
import FavoriteFill from '../../../Assets/Svg/UI/Favorite/FavoriteFill';

const AddToFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChange = () => {
    setIsFavorite(!isFavorite)
  };

  return (   
    <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteFill />} />}
      label="Ajouter aux favoris" labelPlacement="start"
      checked={isFavorite}
      onChange={handleChange}
    />
  );
};

export default AddToFavorite;
