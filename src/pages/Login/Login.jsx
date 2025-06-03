import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./index.module.css";
import TituloBranco from "../../components/TituloBranco";
import InputLogin from "../../components/InputLogin";
import BotaoVermelho from "../../components/BotaoVermelho";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('Iniciando login...'); // LOG
      console.log('Username:', username, 'Password:', senha); // LOG

      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password: senha }),
      });

      console.log('Response status:', response.status); // LOG
      console.log('Response:', response); // LOG

      if (!response.ok) {
        const errData = await response.json();
        console.log('Error data:', errData); // LOG
        throw new Error(errData.error || "Erro ao fazer login");
      }

      const data = await response.json();
      console.log('Success data:', data); // LOG

      // Salva token e username no localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      alert("Login realizado com sucesso!");
      navigate("/dashboard");  // Redireciona para dashboard ou outra página

    } catch (error) {
      console.error('Erro completo:', error); // LOG
      alert(error.message);
    }
  };

  return (
    <div className={styles.page}>
      <img src="/image/logo.png" alt="Logo" className={styles.logo} />

      <div className={styles.card}>
        <TituloBranco titulo="LOGIN" />

        <InputLogin
          placeholder="Nome de usuário"
          Icon={FaUser}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputLogin
          placeholder="Senha"
          Icon={FaLock}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <BotaoVermelho texto="Entrar" onClick={handleLogin} />

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Link to="/cadastro" className={styles.registro}>
            Não tem conta? <u>Cadastre-se</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
