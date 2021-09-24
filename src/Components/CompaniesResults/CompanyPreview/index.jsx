import React from "react";
import AddToFavorite from "../../CTAs/AddToFavorite";
import ChipsArray from "./ChipsArray";
import CompanyPreviewAvatar from "./Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { useSnackbar } from 'notistack';
import UIButton from '../../UIButton';
import SendEmailLight from "../../../Assets/Svg/SendEmail/SendEmailLight";

const CompanyPreview = ({ company }) => {
  const isLogged = useSelector(state => state.user.isLogged);

  const { enqueueSnackbar} = useSnackbar();
  const handleClickVariant = (message, variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  return (
    <Card variant="outlined">
      {isLogged ? (
        <React.Fragment>
          <CardHeader sx={{ p: 2 }}
          avatar={
            <CompanyPreviewAvatar companyName={company.name}/>
          }
          action={
            <AddToFavorite
              company={{id:company.id, setIsFavorite:company.setIsFavorite, isFavorite:company.isFavorite}}
              snackbarAdd={(handleClickVariant(`${company.name} a bien été ajouté au favoris.`,'success'))} 
              snackbarDelete={(handleClickVariant(`${company.name} a bien été retiré des favoris.`,'success'))} 
            />
          }
          title={company.name}
          subheader={company.category_name}
          />
          <Divider light/>
          <CardContent sx={{ p: 2 }} >
            <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
              {`Effectif Tech: ${company.staff_size}`}
            </Typography>
            <ChipsArray companyStacks={company.stacks} />
            {company.is_it_recruiting ? (
              <>
                <Typography variant="body2" sx={{ pt: 1.25, pb: 1.75 }} color="text.secondary">
                  {company.description}
                </Typography>
                <Typography variant="overline" sx={{ pt: 1, pb: 0 }} display="block" color="warning.main">
                  {`En recrutement!`}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body2" sx={{ pt: 1.25 }} color="text.secondary">
                  {company.description}
                </Typography>
              </>
            )}
          </CardContent>
          <Divider light/>
          <CardActions>
            <IconButton aria-label="send email" href={`mailto:${company.email}`}>
              <SendEmailLight />
            </IconButton>
            <UIButton
              size="small"
              color="primary"
              content={company.website_link}
              href={company.website_link}
              target="_blank"
            />
          </CardActions>
        </React.Fragment>       
      ) : (
        <React.Fragment>
          <CardHeader sx={{ p: 2 }}
          avatar={
            <CompanyPreviewAvatar companyName={company.name}/>
          }
          title={company.name}
          subheader={company.category_name}
          />
          <Divider light/>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
              {`Effectif Tech: ${company.staff_size}`}
            </Typography>
            <ChipsArray companyStacks={company.stacks}/>
          </CardContent>
        </React.Fragment>
      )}
    </Card>
  );
};

export default CompanyPreview;
