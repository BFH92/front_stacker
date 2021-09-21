import React, { useState } from 'react';
// import ChipsArray from '../../CompaniesResults/CompanyPreview/ChipsArray';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PrimaryDownArrow from '../../../Assets/Svg/Arrow/DownArrow/PrimaryDownArrow';
import UIButton from '../../../Components/UIButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PreviewSavedSearch = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li className="recent--search--item">
      <Card variant="outlined">
        <CardContent className="card--header">
          <Typography variant="body2" color="text.secondary">
            21 Septembre 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
            8:32
          </Typography>
          {/* <ChipsArray /> AJOUTER LES PROPS */}
        </CardContent>
        <CardActions disableSpacing sx={{ pl: 2, pt: 0}}>
          <UIButton
            content={"Appliquer"}
            variant={"contained"}
            size={"small"}
            color={"primary"}
          />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <PrimaryDownArrow />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ p: 2, pt: 0.75}}>
            <Typography color="text.secondary" variant="body2">Effectif Tech: $variable</Typography>
            <Typography color="text.secondary" variant="body2">Type d'entreprise: $variable</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
};

export default PreviewSavedSearch;
