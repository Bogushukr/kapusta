import React from 'react';

import Media from 'react-media';

import './ButtonLogout.scss';

import LogoutIcon from '../../Icons/logout.svg';
import UserAvatar from '../../Icons/userAvatar.svg';

const ButtonLogout = () => {
  return (
    <Media
      queries={{
        small: { maxWidth: 767 },
        medium: { minWidth: 768, maxWidth: 1279 },
        large: { minWidth: 1280 },
      }}
    >
      {matches => (
        <div className="userInfo">
          {matches.small && (
            <div className="userLogin">
              <img
                className="userAvatar"
                alt="userAvatar"
                src={UserAvatar}
              ></img>
              <img className="logout" alt="logo" src={LogoutIcon} />
            </div>
          )}
          {matches.medium && (
            <div className="userLogin">
              <img
                className="userAvatar"
                alt="userAvatar"
                src={UserAvatar}
              ></img>
              <span className="userName">User Name</span>
              <span className="userLogout">Выйти</span>
            </div>
          )}
          {matches.large && (
            <div className="userLogin">
              <img
                className="userAvatar"
                alt="userAvatar"
                src={UserAvatar}
              ></img>
              <span className="userName">User Name</span>
              <span className="userLogout">Выйти</span>
            </div>
          )}
        </div>
      )}
    </Media>
  );
};

export default ButtonLogout;
