import styles from './index.module.css';

const BotaoVermelho = (props) => {
  return (
    <button className={styles.botao}>{props.texto}</button>
  );
}

export default BotaoVermelho;