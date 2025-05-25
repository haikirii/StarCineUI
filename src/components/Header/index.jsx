
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const Header = () => {

  return (
    <div id="container-header">
      <header className={styles.header}>

        <img src="image/logo.png" alt="Logo StarCine" className={styles['logo-Starcine']} />

        <nav className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <span className={styles['title-menu']}>
              Categoria<i className="fas fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles['dropdown-content']}>
            <a href="#">Animes</a>
            <a href="#">Filmes</a>
            <a href="#">Séries</a>
          </div>
        </nav>

        <div className={styles['search-container']}>
          <input type="search" placeholder="Buscar..." className={styles['search-input']} />
          <img src="image/search.svg" alt="Buscar" className={styles['search-icon']} />
        </div>

        <a href="#" className={styles['favoritos-link']}>
          <i className={`fa-regular fa-bookmark ${styles['fav_svg']}`}></i>
          <span className={styles['fav_title']}> Lista de Favoritos</span>
        </a>

        <nav className={styles['dropdown-user']}>
          <div className={styles['icon-account']}>
            <i className="fas fa-user user-icon"></i>
          </div>
          <button className={styles['dropbtn-user']}>
            <i className="fas fa-chevron-down"></i>
          </button>

          <div className={styles['user-dropdown-content']}>
            <a href="#">Perfil</a>
            <a href="#">Sair</a>
          </div>
        </nav>


      </header>
    </div>
  );
};

export default Header;