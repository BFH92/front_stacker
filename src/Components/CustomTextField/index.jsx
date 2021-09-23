import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@material-ui/core';

const CustomTextField = (props) => {
  const theme = useTheme();

  return (
    <TextField
      theme={theme}
      color={props.color}
      label={props.label}
      size={props.size}
      variant={props.variant}
      type={props.type}
      sx={props.sx}
      validate={props.validate}
    />
  );
};

export default CustomTextField;
