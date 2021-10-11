import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');
function Modal({
  modalTitle = 'Вы действительно хотите выйти?',
  modalConfirmButton = 'да',
  modalRejectButton = 'нет',
  handleConfirmClick,
  handleRejectClick,
  onModalClose,
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };
  return createPortal(
    <div className="modalBackdrop" onClick={handleBackdropClick}>
      <div className="modalContent">
        <span className="closeIcon" onClick={onModalClose}></span>
        <p>{modalTitle}</p>
        <button type="button" className="confirm" onClick={handleConfirmClick}>
          {modalConfirmButton}
        </button>
        <button type="button" className="reject" onClick={handleRejectClick}>
          {modalRejectButton}
        </button>
      </div>
    </div>,
    modalRoot,
  );
}
export default Modal;
