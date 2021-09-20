import React from 'react';
import AddToFavorite from '../../CTAs/AddToFavorite';
import ChipsArray from './ChipsArray';
import CompanyPreviewAvatar from './Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';

const CompanyPreview = ({ company }) => {

  return (
    <Card>
      <CardHeader
        avatar={
          <CompanyPreviewAvatar companyName={company.name}/>
        }
        title={company.name}
        subheader={`Effectif Tech: ${company.staff_size}`}
      />
      <CardContent>
        <ChipsArray companyStacks={company.stacks}/>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={company.website_link} target="_blank" underline="hover" rel="noreferrer">
          Site internet
        </Link>
        <AddToFavorite />
      </CardActions>
    </Card>
  );
};

export default CompanyPreview;
