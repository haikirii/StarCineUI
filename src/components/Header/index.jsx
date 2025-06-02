import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div id="container-header">
      <header className={styles.header}>

      <Link to="/"> 
      <img src="/image/logo.png" alt="Logo StarCine" className={styles['logo-Starcine']} />
      </Link>

        <nav className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <span className={styles['title-menu']}>
              Categoria<i className="fas fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles['dropdown-content']}>
            <Link to="/CategoriaAnime">Animes</Link>
            <Link to="/CategoriaFilme">Filmes</Link>
            <Link to="/CategoriaSerie">Séries</Link>
          </div>
        </nav>

        <div className={styles['search-container']}>
          <input type="search" placeholder="Buscar..." className={styles['search-input']} />
          <img src="image/search.svg" alt="Buscar" className={styles['search-icon']} />
        </div>

        <div className={styles['favoritos-link']}>
          <i className={`fa-regular fa-bookmark ${styles['fav_svg']}`}></i>
          <Link to="/perfil"><span className={styles['fav_title']}> Lista de Favoritos</span></Link>
        </div>

        <nav className={styles['dropdown-user']}>
          <div className={styles['icon-account']}>
            <i className="fas fa-user user-icon"></i>
          </div>
          <button className={styles['dropbtn-user']}>
            <i className="fas fa-chevron-down"></i>
          </button>

          <div className={styles['user-dropdown-content']}>
            <Link to="/perfil">Perfil</Link>
            <Link to="#">Sair</Link>
          </div>
        </nav>


      </header>
    </div>
  );
};

export default Header;