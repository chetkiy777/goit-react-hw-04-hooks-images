import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button className={styles.Button} onClick={loadMore}>
      LOAD MORE
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
