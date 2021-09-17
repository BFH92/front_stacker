import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, Theme } from '@material-ui/core/styles';

const StyledBadge = withStyles(() => ({
  badge: {
    backgroundColor: 'rgb(76, 175, 80)',
    color: 'rgb(76, 175, 80)',
    // boxShadow: `0 0 0 2px rgb(246, 247, 254)`,
    boxShadow: `0 0 0 2px rgb(92, 30, 226)`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.5s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const UserAvatar = () => {

  return (    
    <StyledBadge
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot"
    >
      <Avatar>
        A
      </Avatar>
    </StyledBadge>      
  );
};

export default UserAvatar;
