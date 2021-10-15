import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Media from 'react-media';
import { authSelectors, authOperations } from '../../Redux/auth';
import Modal from '../Modal/Modal';
import LogoutIcon from '../../Icons/logout.svg';
import style from './UserMenu.module.scss';

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
    <Media
      queries={{
        small: { maxWidth: 767 },
        medium: { minWidth: 768 },
      }}
    >
      {matches => (
        <div>
          {matches.small && (
            <div className={style.container}>
              <div className={style.avatar}>
                <span className={style.firstLetter}>{firstAvatarLetter}</span>
              </div>
              <button
                className={style.userLogout}
                type="button"
                onClick={toggleModal}
              >
                <img className="logout" alt="logo" src={LogoutIcon} />
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
          )}
          {matches.medium && (
            <div className={style.container}>
              <div className={style.avatar}>
                <span className={style.firstLetter}>{firstAvatarLetter}</span>
              </div>
              <span className={style.name}>{name}</span>
              <button
                className={style.userLogout}
                type="button"
                onClick={toggleModal}
              >
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
          )}
        </div>
      )}
    </Media>
  );
};

export default UserMenu;
