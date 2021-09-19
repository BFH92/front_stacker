import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const CustomizedCompanyPreviewAvatar = withStyles({
  root: {
    backgroundColor:'rgb(189, 189, 189)',
    color:'rgb(255, 255, 255)',
    fontWeight:'500',
  }
})(Avatar);

const CompanyPreviewAvatar = () => {

  return (
    <CustomizedCompanyPreviewAvatar>T</CustomizedCompanyPreviewAvatar>
  );
};

export default CompanyPreviewAvatar;
