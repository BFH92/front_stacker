import React from 'react';
import AddToFavorite from '../../CTAs/AddToFavorite';
import ChipsArray from './ChipsArray';
import CompanyPreviewAvatar from './Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const CompanyPreview = ({ company }) => {

  return (
      <Card>
        <CardHeader
          avatar={
            <CompanyPreviewAvatar />
          }
          title={company.name}
          subheader="Effectif Tech: {company.staff_size} personnes"
        />
        <CardContent>
          <ChipsArray />
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary">
            Site internet
          </Button>
          <AddToFavorite />
        </CardActions>
      </Card>
  );
};

export default CompanyPreview;
