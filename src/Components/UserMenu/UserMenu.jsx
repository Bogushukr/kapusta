import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../Redux/auth';
import style from './UserMenu.module.scss';
import Modal from '../Modal/Modal';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const avatarName = name.split('') || ' ';
  const firstAvatarLetter = avatarName[0].toUpperCase();
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
      <div className={style.avatar}>
        <span className={style.firstLetter}>{firstAvatarLetter}</span>
      </div>
      <span className={style.name}>{name}</span>
      <button className={style.userLogout} type="button" onClick={toggleModal}>
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
