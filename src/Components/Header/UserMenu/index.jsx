import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UserAvatar from './UserAvatar';
import DarkStrokeDashboard from '../../../Assets/Svg/Dashboard/StrokeDashboard/DarkStrokeDashboard';
import DarkStrokeLogout from '../../../Assets/Svg/Logout/StrokeLogout/DarkStrokeLogout';
// import DarkStrokeAccount from '../../../Assets/Svg/Account/StrokeAccount/DarkStrokeAccount';
// import DarkStrokeNotification from '../../../Assets/Svg/Notification/StrokeNotification/DarkStrokeNotification';
// import DarkStrokeSetting from '../../../Assets/Svg/Setting/StrokeSetting/DarkStrokeSetting';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const UserMenu = ({ logout }) => {
  const logged_as = useSelector(state=> state.user.logged_as)
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
        <IconButton onClick={handleClick} size="small">
          <UserAvatar sx={{ width: 30, height: 30 }} />
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
        {logged_as ===  "user" ?
        (<MenuItem to="/user/dashboard" component={Link}>        
          <ListItemIcon>
            <DarkStrokeDashboard fontSize="small" />
          </ListItemIcon>  
          Mon dashboard
        </MenuItem> )
        :
        (<MenuItem to="/company/dashboard" component={Link}>
          <ListItemIcon>
            <DarkStrokeDashboard fontSize="small" />
          </ListItemIcon>  
        Dashboard entreprise
        </MenuItem>)
        }
        <Divider />
        {/* <MenuItem to="/user/notifications" component={Link}>
          <ListItemIcon>
            <DarkStrokeNotification fontSize="small" />
          </ListItemIcon>
          Notifications
        </MenuItem>
        {logged_as ===  "user" ?
        (<MenuItem to="/user/settings" component={Link}>
          <ListItemIcon>
            <DarkStrokeSetting fontSize="small" />
          </ListItemIcon>
          Réglages
        </MenuItem>)
        :
        (<MenuItem to="/company/settings" component={Link}>
        <ListItemIcon>
          <DarkStrokeSetting fontSize="small" />
        </ListItemIcon>
        Réglages
        </MenuItem>)
        } */}
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <DarkStrokeLogout fontSize="small" />
          </ListItemIcon>
          Se déconnecter
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserMenu;
