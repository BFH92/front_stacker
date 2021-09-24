import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UIButton from '../../UIButton';
import { useSnackbar } from 'notistack';

const NoSavedSearch = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => () => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <div className="recent--search--item">
      <Card variant="outlined">
        <CardContent className="card--header">
          <Typography variant="body2" color="text.secondary">
            Tu n'as pas encore enregistré de recherches.
          </Typography>
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2}}>
          <UIButton
            variant="contained"
            size="small"
            color="primary"
            content="Enregistrer ma recherche"
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default NoSavedSearch;
