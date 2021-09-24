import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import StackerLogo from '../../DesktopHeader/NavTabs/StackerLogo';
import Tab from '@mui/material/Tab';
import { useTheme } from '@material-ui/core';
import { styled } from '@mui/material/styles';

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

const NavTabsMobile = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

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
      </StyledTabs>
    </Box>
  );
};

export default NavTabsMobile;
