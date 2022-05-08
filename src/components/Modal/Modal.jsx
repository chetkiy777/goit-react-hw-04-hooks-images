import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, largeImage }) => {
  const handleClose = useCallback((e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  },[onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleClose)

    return () => {
      window.removeEventListener('keydown', handleClose);
    }
  }, [largeImage, handleClose]);


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
