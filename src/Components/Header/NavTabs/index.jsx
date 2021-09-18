import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import StackerLogo from './StackerLogo';
import Tab from '@mui/material/Tab';

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
          <Tab 
            label={<StackerLogo />}
            to="/"
            component={Link}
          />
          <Tab 
            label="Recherche"
            to="/search/company"
            component={Link}
            style={{color: "white"}}
          /> 
          <Tab
            label="Stacks"
            to="/stacks"
            component={Link}
            style={{color: "white"}}
          />
          <Tab
            label="À propos"
            to="/About"
            component={Link}
            style={{color: "white"}}
          />  
      </Tabs>
    </Box>
  );
};

export default NavTabs;
