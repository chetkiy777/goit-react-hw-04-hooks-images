import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, largeImage }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
  }, [largeImage]);

  const handleClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
    window.removeEventListener('keydown', handleClose);
  };

  return createPortal(
    <div className={styles.Overlay}>
      <img className={styles.Modal} src={largeImage} alt="" />
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImage: PropTypes.string,
};

export default Modal;
