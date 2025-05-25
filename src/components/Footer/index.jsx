import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}> 
      <div className={styles['footer-content']}>
        <nav className={styles['footer-links']}>
          <a href="/sobre-nos" className={styles['footer-link']}>Sobre nós</a>
          <a href="/politica-de-privacidade" className={styles['footer-link']}>Política de Privacidade</a>
          <a href="/termos-de-uso" className={styles['footer-link']}>Termos de Uso</a>
        </nav>
        <p className={styles.copyright}>
          Copyright © 2025 By CineStar
        </p>
      </div>
    </footer> 
  );
};

export default Footer;