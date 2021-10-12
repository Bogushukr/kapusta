import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/auth';
import UserAvatar from '../../Icons/userAvatar.svg';
import style from './UserMenu.module.css';
import Modal from '../Modal/Modal';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  const [setOpenModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <div className={style.container}>
      <img src={UserAvatar} alt="" width="32" className={style.avatar} />
      <span className={style.name}>Welcome, {name}</span>
      <button type="button" onClick={toggleModal}>
        Выйти
      </button>
      {setOpenModal && (
        <Modal
          text={'Вы действительно хотите выйти?'}
          handleConfirmClick={logOut}
          handleRejectClick={toggleModal}
          onModalClose={toggleModal}
        />
      )}
    </div>
  );
};

export default UserMenu;
