import React from 'react';
import { useSelector } from 'react-redux';

import style from './AppBar.module.css';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../Redux/auth';
import Logo from '../Logo/Logo';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={style.header}>
      <Logo />
      {isAuthenticated ? <UserMenu /> : null}
    </header>
  );
};

export default AppBar;
