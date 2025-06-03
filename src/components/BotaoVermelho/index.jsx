import styles from './index.module.css';

const BotaoVermelho = (props) => {
  return (
    <button className={styles.botao} onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default BotaoVermelho;
