import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth';

import Modal from '../Modal/Modal';

const UserLogout = () => {
  // const dispatch = useDispatch();

  // const logoutModal = () => dispatch(logOut());

  const [setOpenModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <>
      <button type="button" onClick={toggleModal}>
        <p className="userLogout">Выйти</p>
      </button>
      {setOpenModal && (
        <Modal
          text={'Вы действительно хотите выйти?'}
          // handleConfirmClick={logoutModal}
          handleRejectClick={toggleModal}
          onModalClose={toggleModal}
        />
      )}
    </>
  );
};

export default UserLogout;
