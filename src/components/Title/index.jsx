import React from 'react';
import styles from './index.module.css';

const Title = ({ children }) => {
  return (
    <h2 className={styles.title}>
      <a href="#">{children}</a>
    </h2>
  );
};

export default Title;
