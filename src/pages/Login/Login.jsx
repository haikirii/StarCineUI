import styles from "./index.module.css";
import TituloBranco from "../../components/TituloBranco"
import InputLogin from "../../components/InputLogin";
import BotaoVermelho from "../../components/BotaoVermelho";
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    return (
    <div className={styles.page}>
      <img src="/image/logo.png" alt="Logo" className={styles.logo} />

      <div className={styles.card}>
        <TituloBranco titulo="LOGIN"/>

        <InputLogin placeholder="E-mail" Icon={FaUser}/>

        <InputLogin placeholder="Senha" Icon={FaEnvelope}/> 

        <a className={styles.esquecimento} href="*">Esqueci minha senha</a>

        <BotaoVermelho texto="Entrar"/>
        <div>
            <Link to="/cadastro" className={styles.registro}>Não tem conta? <u>Cadastre-se</u></Link>
        </div>

      </div>
    </div>
  );
}

export default Cadastro;