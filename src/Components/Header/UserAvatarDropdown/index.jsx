import React from 'react';
import UserAvatar from './UserAvatar';
import UserDropdown from './UserDropdown';
import './userAvatarDropdown.scss';

const UserAvatarDropdown = () => {

  return (    
    <div className="user__avatar__dropdown">
      <UserAvatar />
      <UserDropdown />
    </div>
  );
};

export default UserAvatarDropdown;
