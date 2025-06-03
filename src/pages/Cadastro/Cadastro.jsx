import React, { useState } from 'react';  // Importando useState
import styles from "./index.module.css";
import TituloBranco from "../../components/TituloBranco";
import InputLogin from "../../components/InputLogin";
import BotaoVermelho from "../../components/BotaoVermelho";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

const Cadastro = () => {

  const [nome, setNome] = useState("");   // username
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");   // novo campo "name"
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/register_user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nome,
          email: email,
          name: name,
          photo: null,
          password: senha,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      console.log("Usuário cadastrado:", data);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer cadastro");
    }
  };

  return (

    <div className={styles.page}>
      <img src="/image/logo.png" alt="Logo" className={styles.logo} />

      <div className={styles.card}>
        <TituloBranco titulo="CADASTRO" />

        <InputLogin
          placeholder="Nome de usuário"
          Icon={FaUser}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <InputLogin
          placeholder="Nome completo"
          Icon={FaUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputLogin
          placeholder="E-mail"
          Icon={FaEnvelope}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputLogin
          placeholder="Senha"
          Icon={FaLock}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <BotaoVermelho texto="Cadastrar" onClick={handleCadastro} />

        <div>
          <Link to="/" className={styles.registro}>
            Já tem conta? <u>Entre</u>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;

