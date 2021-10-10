import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/auth';
import UserAvatar from '../../Icons/userAvatar.svg';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <img src={UserAvatar} alt="" width="32" className={style.avatar} />
      <span className={style.name}>Welcome, {name}</span>
      <button type="button" onClick={logOut}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
