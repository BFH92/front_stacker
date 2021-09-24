import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import StackerLogo from './StackerLogo';
import Tab from '@mui/material/Tab';
import { useTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#fff',
  },
});

const NavTabs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const LoggedAs = useSelector(state=> state.user.logged_as)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}>
          <Tab 
            label={<StackerLogo />}
            to="/"
            component={Link}
            style={{
              padding: 0,
              color: theme.palette.common.white
            }}
          />
          {LoggedAs !== "company"? 
          <Tab 
            label="Recherche"
            to="/search"
            component={Link}
            style={{
              marginLeft: 20,
              color: theme.palette.common.white
            }}
          /> :""
          }
          <Tab
            label="Stacks"
            to="/stacks"
            component={Link}
            style={{
              color: theme.palette.common.white
            }}
          />
          <Tab
            label="À propos"
            to="/about"
            component={Link}
            style={{
              color: theme.palette.common.white
            }}
          />
          <Tab
            label="Espace Entreprise"
            to="/company/dashboard"
            component={Link}
            style={{
              color: theme.palette.common.white
            }}
          />  
      </StyledTabs>
    </Box>
  );
};

export default NavTabs;
