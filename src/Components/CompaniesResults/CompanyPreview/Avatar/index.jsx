import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';

const CompanyPreviewAvatar = (props) => {
  const theme = useTheme();

  const CustomizedCompanyPreviewAvatar = withStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular,
    }
  })(Avatar);

  return (
    <CustomizedCompanyPreviewAvatar>{props.companyName[0]}</CustomizedCompanyPreviewAvatar>
  );
};

export default CompanyPreviewAvatar;
