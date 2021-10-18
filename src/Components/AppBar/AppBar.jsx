import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './AppBar.module.css';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../Redux/auth';
import Logo from '../Logo/Logo';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={style.header}>
      <NavLink to="/" exact>
        <button type="button" className={style.btn}>
          <Logo />
        </button>
      </NavLink>

      {isAuthenticated ? <UserMenu /> : null}
    </header>
  );
};

export default AppBar;
