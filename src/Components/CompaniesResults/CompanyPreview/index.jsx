import React from 'react';
import AddToFavorite from '../../CTAs/AddToFavorite';
import ChipsArray from './ChipsArray';
import CompanyPreviewAvatar from './Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CompanyPreview = ({ company }) => {

  return (
    <Card variant="outlined">
      <CardHeader sx={{ p: 2 }}
        avatar={
          <CompanyPreviewAvatar companyName={company.name}/>
        }
        title={company.name}
        subheader={company.company_category_id}
      />
      <Divider />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ pb: 2 }}>
          {`Effectif Tech: ${company.staff_size}`}
        </Typography>
        <ChipsArray companyStacks={company.stacks}/>
      </CardContent>
      <CardActions sx={{ px: 2, pt: 0, pb: 1 }}>
        <Link
          href={company.website_link}
          target="_blank"
          underline="none"
          rel="noreferrer"
          color="primary"
          sx={{ flexGrow: 1 }}
        >
          Site internet
        </Link>
        <AddToFavorite />
      </CardActions>
    </Card>
  );
};

export default CompanyPreview;
