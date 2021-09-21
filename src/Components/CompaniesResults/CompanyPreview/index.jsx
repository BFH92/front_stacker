import React, { useEffect, useState } from "react";
import AddToFavorite from "../../CTAs/AddToFavorite";
import ChipsArray from "./ChipsArray";
import CompanyPreviewAvatar from "./Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const CompanyPreview = ({ company }) => {
  const isLogged = useSelector(state => state.user.isLogged)
  return (
    <Card elevation={3}>
      <CardHeader
        sx={{ p: 2 }}
        avatar={<CompanyPreviewAvatar companyName={company.name} />}
        title={company.name}
        subheader={company.company_category_id}
      />
      <Divider />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ pb: 2 }}>
          {`Effectif Tech: ${company.staff_size}`}
        </Typography>
        <ChipsArray companyStacks={company.stacks} />
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
        {isLogged ? 
        <AddToFavorite company={{id:company.id, setIsFavorite:company.setIsFavorite, isFavorite:company.isFavorite}}/>
        :""}
      </CardActions>
    </Card>
  );
};

export default CompanyPreview;
