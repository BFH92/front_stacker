import React, { useState, useContext } from "react";
// import ChipsArray from '../../CompaniesResults/CompanyPreview/ChipsArray';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PrimaryDownArrow from "../../../Assets/Svg/Arrow/DownArrow/PrimaryDownArrow";
import UIButton from "../../../Components/UIButton";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import SavedSearchesManager from "../../../Services/RailsApi/SavedSearchesFetch";
import { useSnackbar } from "notistack";
import { FilterContext } from "../../../Context/FilterContext";
import { useTheme } from '@material-ui/core';
import Moment from 'react-moment';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PreviewSavedSearch = ({ data }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { setSaveListener } = useContext(FilterContext);
  const { saveListener } = useContext(FilterContext);
  const { setStaffSize } = useContext(FilterContext);
  const { setCategories } = useContext(FilterContext);
  const { setFilterStacks } = useContext(FilterContext);
  const { setChipData } = useContext(FilterContext);

  const OutlinedPurpleStyleChip = withStyles({
    root: {
      borderColor: theme.palette.grey[600],
      color: theme.palette.primary.main
    }
  })(Chip);

  const deleteSearchCard = (data_id) => async () => {
    // variant could be success, error, warning, info, or default
    try {
      const response = await SavedSearchesManager.deleteSearch(data_id);
      let variant = "success";
      let message = `Recherche bien supprimée !`;
      setSaveListener(saveListener - 1);
      enqueueSnackbar(message, { variant });
    } catch (error) {
      let variant = "info";
      let message = `Nous rencontrons une erreur lors de la suppression -> ${error}`;
      if (String(error).includes("401"))
        message = `Vous devez vous connecter pour sauvegarder votre recherche`;
      enqueueSnackbar(message, { variant });
    }
  };

  console.log(data)

  const applySearch = () => () => {
    // variant could be success, error, warning, info, or default
    setStaffSize(data.staff_size);
    setCategories(data.company_category);
    let stacksList = new Set();
    stacks &&
      stacks.map((stack) => {
        stacksList.add(stack);
      });
    stacksList = Array.from(stacksList);
    setFilterStacks(stacksList);
    preSetChipData(stacksList);
  };

  const preSetChipData = (list) => {
    let normalizedList = [];
    list.map((stack) => {
      normalizedList.push({ key: uuidv4(), label: stack });
    });
    setChipData(normalizedList);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let stacks;
  if (data.stacks !== "") {
    stacks = data.stacks;
    stacks = stacks.split(",");
  }

  return (
    <li className="recent--search--item">
      <Card variant="outlined">
        <CardContent className="card--header">
          <Typography variant="body2" color="text.secondary">
            <Moment date={data.created_at} fromNow/>
          </Typography>
        </CardContent>
        <CardContent className="container__chips" sx={{ px: 2, py: 0}}>
          {stacks &&
            stacks.map((stack) => {
              return (
                <li key={uuidv4()} className="chip--item">
                  <OutlinedPurpleStyleChip
                    size="small"
                    variant="outlined"
                    label={stack}
                  />
                </li>
              );
            })
          }
        </CardContent>
        <CardActions disableSpacing sx={{ px: 2, pb: 1.5 }}>
          <>
            <UIButton
              content="Appliquer"
              variant="contained"
              size="small"
              color="primary"
              onClick={applySearch()}
              sx={{ mr: 1.5 }}
            />
          </>
          <>
            <UIButton
              content="Supprimer"
              variant="outlined"
              size="small"
              color="primary"
              onClick={deleteSearchCard(data.id)}
            />
          </>
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
          <CardContent sx={{ p: 2, pt: 0.75 }}>
            {data ? (
              <>
                <Typography color="text.secondary" variant="body2">
                  {data.staff_size ? (
                    `Effectif Tech: ${data.staff_size}`
                  ) : (
                    "Effectif Tech: Tous"
                  )}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {data.company_category ? (
                    `Type d'entreprise: ${data.category_name}`
                  ) : (
                    "Type d'entreprise: Toutes"
                  )}
                </Typography>
              </>
            ) : (
              ""
            )}
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
};

export default PreviewSavedSearch;
