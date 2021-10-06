import React from 'react';
import './HeaderPage.scss';
import Logo from '../Logo/Logo';
import ButtonLogout from '../ButtonLogout/ButtonLogout';

const HeaderPage = () => {
  //   const balance = {};

  return (
    <div className="header">
      <Logo />
      <ButtonLogout />
    </div>
  );
};

export default HeaderPage;
