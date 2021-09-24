import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import SVGTest from '../../../../Assets/Svg/BinDelete';
import BoldBurgerMenu from '../../../../Assets/Svg/BurgerMenu/BoldBurgerMenu';

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconButton
          onClick={handleClick}
          edge="start"
          aria-label="menu"
          sx={{ ml: 0.25 }}
        >
          <BoldBurgerMenu />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link to="/search/company">
            Recherche
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/stacks">
            Stacks
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">
            À propos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/company/dashboard">
            Espace Entreprise
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default BurgerMenu;
