import React from 'react';
import ObraCard from '../components/ObraCard';
import Title from '../components/Title';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const serieList = [
  { name: 'Game of Thrones', image: 'image/Game of Thrones (2011).png' },
  { name: 'Moonlight Mystique', image: 'image/Moonlight Mystique (1) 1.png' },
  { name: 'La Casa de Papel', image: 'image/la casa de papel 1.png' },
  { name: 'WandaVision', image: 'image/wanda 1.png' },
  { name: 'Arcane', image: 'image/Arcane League of Legends TV Poster 1.png' },
  { name: 'Frasier', image: 'image/Frasier (1).png' },
  { name: 'O Conto da Aia', image: 'image/baixados (1).png' },
  { name: 'You', image: 'image/You.png' },
  { name: 'Gossip Girl', image: 'image/baixados (4).png' },
  { name: 'The BigBang Theory', image: 'image/baixados (3).png' },
  { name: 'The walking dead', image: 'image/The walking dead.png' },
  { name: 'Bridgerton', image: 'image/bridgerton.jpeg' },
  { name: 'Supernatural', image: 'image/Supernatural.jpeg' },
  { name: 'Euphoria', image: 'image/euphoria.jpeg' },
  { name: 'Good Omens', image: 'image/good omens.jpeg' },
  { name: 'Lucifer', image: 'image/lucifer.jpeg' },
  { name: 'Shadow Hunters', image: 'image/Shadowhunters.jpeg' },
  { name: 'The Boys', image: 'image/theboys.jpeg' },
  { name: 'The 100', image: 'image/the100.jpeg' },
  { name: 'Diários de um Vampiro', image: 'image/vampires.jpeg' },
  { name: 'Friends', image: 'image/friends.png' },
];

const CategoriaSerie = () => {
  return (
    <main>
        <Header/>
      <Title>Séries</Title>
      <ObraCard title="Series" items={serieList} />
      <Footer/>
    </main>
  );
};

export default CategoriaSerie;
