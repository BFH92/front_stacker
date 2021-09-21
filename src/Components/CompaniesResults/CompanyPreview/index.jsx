import React from 'react';
import AddToFavorite from '../../CTAs/AddToFavorite';
import ChipsArray from './ChipsArray';
import CompanyPreviewAvatar from './Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CompanyPreview = ({ company }) => {

  return (
    <Card variant="outlined">
      <CardHeader sx={{ p: 2 }}
        avatar={
          <CompanyPreviewAvatar companyName={company.name}/>
        }
        action={
          <AddToFavorite />
        }
        title={company.name}
        subheader={company.company_category_id}
      />
      <Divider light/>
      <Card sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
          {`Effectif Tech: ${company.staff_size}`}
        </Typography>
        <ChipsArray companyStacks={company.stacks}/>
      </Card>
    </Card>
  );
};

export default CompanyPreview;
