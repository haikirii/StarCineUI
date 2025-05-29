import styles from "./index.module.css";
import TituloBranco from "../../components/TituloBranco"
import InputLogin from "../../components/InputLogin";
import BotaoVermelho from "../../components/BotaoVermelho";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

const Cadastro = () => {
    return (
    <div className={styles.page}>
      <img src="/image/logo.png" alt="Logo" className={styles.logo} />

      <div className={styles.card}>
        <TituloBranco titulo="SIGN UP"/>

        <InputLogin placeholder="Usuário" Icon={FaUser}/>

        <InputLogin placeholder="E-mail" Icon={FaEnvelope}/>

        <InputLogin placeholder="Senha" Icon={FaLock}/>

        <InputLogin placeholder="Confirmar senha" Icon={FaLock}/> 
        <div className={styles.alinha}>
            <BotaoVermelho texto="Cadastrar"/>
        </div>
        <div>
            <Link to="/login" className={styles.registro}>Já tem conta? <u>Entre</u></Link>
        </div>

      </div>
    </div>
  );
}

export default Cadastro;