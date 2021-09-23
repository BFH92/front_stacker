import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrimaryDownArrow from '../../../Assets/Svg/Arrow/DownArrow/PrimaryDownArrow';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

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

const VisitorAlert = () => {
  const theme = useTheme();
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
            Il faut t'inscrire ou te connecter pour pouvoir profiter des recherches enregistrées.
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ pl: 2, pt: 0}}>
          <Button
            theme={theme}
            component={Link}
            to="/user/sign-up"
            variant="outlined"
            size="small"
            color="primary"
          >
            s'inscrire
          </Button>
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
            <Typography color="text.secondary" variant="body2">Avantages à s'inscrire:<br/></Typography>
            <Typography color="text.secondary" variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusantium numquam, asperiores expedita dolore omnis autem laborum! Necessitatibus beatae eius sit, laborum reprehenderit, quo corrupti, fugiat nihil soluta omnis facilis.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default VisitorAlert;
