import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DarkStrokeLogin from '../../../../Assets/Svg/Login/StrokeLogin/DarkStrokeLogin';
import DarkStrokeSignUp from '../../../../Assets/Svg/SignUp/StrokeSignUp/DarkStrokeSignUp';

const UserMenu = () => {
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
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', ml: 1 }}>
        <Button
          onClick={handleClick}
          variant="outlined"
          color="inherit"
          size="small"
        >
          Bienvenue
        </Button>
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
          <ListItemIcon>
            <DarkStrokeSignUp fontSize="small" />
          </ListItemIcon>
          <Link to="/user/sign-up">
            S'inscrire
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DarkStrokeLogin fontSize="small" />
          </ListItemIcon>
          <Link to="/user/sign-in">
            Se Connecter
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserMenu;
