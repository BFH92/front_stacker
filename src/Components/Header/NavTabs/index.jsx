import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import StackerLogo from './StackerLogo';
import BasicLink from './BasicLink';
import Tab from '@mui/material/Tab';


function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label={<StackerLogo />} to="/"/>
        <LinkTab label={<BasicLink label="Recherche" to="/search/company"/>} to="/search/company" />     
        <LinkTab label={<BasicLink label="Stacks" to="/stacks" />} to="/stacks"/>
        <LinkTab label={<BasicLink label="About" to="/about" />} to="/About" />     
      </Tabs>
    </Box>
  );
};

export default NavTabs;
