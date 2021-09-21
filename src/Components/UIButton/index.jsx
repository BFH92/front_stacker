import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@material-ui/core';

const UIButton = (props) => {
  const theme = useTheme();

  return (
    <Button theme={theme} variant={props.variant} size={props.size}>{props.content}</Button>
  );
};

export default UIButton;
