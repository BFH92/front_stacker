import React from 'react';
// import StackResults from '../../Components/StacksResults';
import Typography from '@mui/material/Typography';
import StacksTable from '../../Components/StacksTable';

const Stacks = () => {

  return (
    <>
      <Typography variant="h1" component="h1">
        Nos Stacks
      </Typography>
      {/* <StackResults /> */}
      <StacksTable />
    </>
  );
};

export default Stacks;
