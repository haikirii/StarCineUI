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

// import { useState } from "react";
// import styles from "./index.module.css";
// import TituloBranco from "../../components/TituloBranco";
// import InputLogin from "../../components/InputLogin";
// import BotaoVermelho from "../../components/BotaoVermelho";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Cadastro = () => {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   const handleCadastro = async () => {
//     try {
//       const response = await fetch(${import.meta.env.BACK_API_URL}/register_user/, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: nome,
//           email: email,
//           password: senha,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Erro ao cadastrar usuário");
//       }

//       const data = await response.json();
//       console.log("Usuário cadastrado:", data);
//       alert("Cadastro realizado com sucesso!");
//     } catch (error) {
//       console.error(error);
//       alert("Erro ao fazer cadastro");
//     }
//   };

//   return (
//     <div className={styles.page}>
//       <img src="/image/logo.png" alt="Logo" className={styles.logo} />

//       <div className={styles.card}>
//         <TituloBranco titulo="CADASTRO" />

//         <InputLogin
//           placeholder="Nome de usuário"
//           Icon={FaUser}
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//         />

//         <InputLogin
//           placeholder="E-mail"
//           Icon={FaEnvelope}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <InputLogin
//           placeholder="Senha"
//           Icon={FaLock}
//           type="password"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//         />

//         <BotaoVermelho texto="Cadastrar" onClick={handleCadastro} />

//         <div>
//           <Link to="/" className={styles.registro}>
//             Já tem conta? <u>Entre</u>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cadastro;