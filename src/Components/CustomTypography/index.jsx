import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@material-ui/core';

const CustomTypography = (props) => {
  const theme = useTheme();

  return (
    <Typography
      theme={theme}
      variant={props.variant}
      component={props.component}
      color={props.color}
      className={props.className}
    >
      {props.content}
    </Typography>
  );
};

export default CustomTypography;
