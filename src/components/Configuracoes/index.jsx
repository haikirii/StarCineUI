import React from 'react';
import styles from './index.module.css';

const Configuracoes = ({ usuario, email, onChange, onSalvar, onExcluir }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Configurações <span className={styles.icone}>⚙️</span>
      </h2>

      <div className={styles.campo}>
        <label htmlFor="usuario">Usuário</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={usuario}
          onChange={onChange}
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>

      <div className={styles.botoes}>
        <button onClick={onSalvar} className={styles.salvar}>
          salvar
        </button>
        <button onClick={onExcluir} className={styles.excluir}>
          Excluir minha conta
        </button>
      </div>
    </div>
  );
};

export default Configuracoes;
