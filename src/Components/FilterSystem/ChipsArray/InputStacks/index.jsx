import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputStacks = () => {

  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Recherche par stacks" variant="outlined" />
    </form>
  );
};

export default InputStacks;