import React, {useState} from "react";
import User from "../components/User";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Configuracoes from "../components/Configuracoes";

const favoritosData = [{ src: 'image/bleach-anime 1.png', alt: 'Bleach', title: 'Bleach' },
          { src: 'image/Moonlight Mystique (1) 1.png', alt: 'Moonlight Mystique', title: 'Moonlight Mystique' },
          { src: 'image/the-apothecary-diaries.png', alt: 'The Apothecary Diaries', title: 'The Apothecary Diaries' },
          { src: 'image/deadpool-and-wolverine.png', alt: 'Deadpool & Wolverine', title: 'Deadpool & Wolverine' },
          { src: 'image/flow.png', alt: 'Flow', title: 'Flow' },
          { src: 'image/alice-in-wonderland.png', alt: 'Alice in Wonderland', title: 'Alice in Wonderland' },
          { src: 'image/Demon Slayer Posters.png', alt: 'Demon Slayer', title: 'Demon Slayer' },];

const avaliaçõesData = [{ src: 'image/the-lord-of-the-rings.png', alt: 'The Lord of the Rings', title: 'The Lord of the Rings' },
          { src: 'image/deadpool-and-wolverine.png', alt: 'Deadpool & Wolverine', title: 'Deadpool & Wolverine' },
          { src: 'image/The Chronicles Of Narnia - Prince Caspian 1.png', alt: 'Narnia: Prince Caspian', title: 'Narnia: Prince Caspian' },
          { src: 'image/blue-exorcist.png', alt: 'Blue Exorcist', title: 'Blue Exorcist' },
          { src: 'image/Black clover HD.png', alt: 'Black Clover', title: 'Black Clover' },
          { src: 'image/The walking dead.png', alt: 'The walking dead', title: 'The walking dead' },
          { src: 'image/friends.png', alt: 'Friends', title: 'Friends' },];  


const Perfil = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        email: '',
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSalvar = () => {
  };

  const handleExcluir = () => {
 
  };

    return(
        <>
            <Header/>
            <User/>
              <Title>Meus Favoritos</Title>
      <Carousel data={favoritosData} />

            <Title>Minhas Avaliações</Title>
      <Carousel data={avaliaçõesData} />
    
      <Configuracoes
        usuario={formData.usuario}
        email={formData.email}
        onChange={handleChange}
        onSalvar={handleSalvar}
        onExcluir={handleExcluir}
      />
      <Footer/>
    </>
    );
};

export default Perfil;