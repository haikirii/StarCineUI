import React from 'react';
import styles from './index.module.css';
import { FaCalendarAlt } from 'react-icons/fa';

const User = ({ name, email, joinDate, img }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.banner}></div>
      <div className={styles.userInfo}>
        <img src="image/Avatar.png" alt="Avatar" className={styles.img} />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.info}>
            <span className={styles.email}>{email}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>
              <FaCalendarAlt className={styles.icon} />
              Entrou em {joinDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
