import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ObraCard = ({ items }) => {
    return (
        <section className={styles.gridContainer}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <img src={item.image} alt={item.name} className={styles.image} />
                        <p className={styles.name}>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ObraCard;
