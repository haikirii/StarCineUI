import React from 'react';
import styles from './index.module.css';

const Ranking = ({ data }) => {
  return (
    <div className={styles.rankingGrid}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.rank}>{item.rank}</div>
          <img src={item.src} alt={item.title} className={styles.image} />
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.stars}>{item.stars}</div>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
