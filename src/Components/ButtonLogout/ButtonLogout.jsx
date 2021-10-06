import React from 'react';

import './ButtonLogout.scss';

import LogoutIcon from '../../Icons/logout.svg';
import UserAvatar from '../../Icons/userAvatar.svg';

const ButtonLogout = () => {
  return (
    <div className="userLogin">
      <img className="user-avatar" alt="user-avatar" src={UserAvatar}></img>
      <img className="logout" alt="logo" src={LogoutIcon} />
    </div>
  );
};

export default ButtonLogout;
