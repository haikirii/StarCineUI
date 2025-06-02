import React from 'react';
import ObraCard from '../components/ObraCard';
import Title from '../components/Title';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const animeList = [
  { name: 'Bleach', image: 'image/bleach-anime 1.png' },
  { name: 'Attack on Titan', image: 'image/attack-on-titan-poster-22 1.png' },
  { name: 'Diário de uma Apotecária', image: 'image/the-apothecary-diaries.png' },
  { name: 'Kaiju No. 8', image: 'image/kaiju-no-8 1.png' },
  { name: 'Naruto Shippuden', image: 'image/Naruto Shippuden.png' },
  { name: 'Blue Exorcist', image: 'image/blue-exorcist.png' },
  { name: 'Black Clover', image: 'image/Black clover HD.png' },
  { name: 'My Hero Academia', image: 'image/Boku no Hero Academia, season 1 (1).png' },
  { name: 'Solo Leveling', image: 'image/SOLO LEVELING WALLPAPER.png' },
  { name: 'Hunter X Hunter', image: 'image/My Anime For Life.png' },
  { name: 'Demon Slayer', image: 'image/Demon Slayer Posters.png' },
  { name: 'Kamisama Kiss', image: 'image/KamisamaKiss.png' },
  { name: 'Dragon Ball Z', image: 'image/DragonBallZ.png' },
  { name: 'Jujutsu Kaisen', image: 'image/JujutsuKaisen.png' },
  { name: 'Natsume Yuujinchou', image: 'image/Naname.png' },
  { name: 'A Viagem de Chihiro', image: 'image/spiritedaway.png' },
  { name: 'O Menino e a Garça', image: 'image/The Boy And The Heron.png' },
  { name: 'O Castelo no Céu', image: 'image/Castelo.png' },
  { name: 'Dr. Stone', image: 'image/DrStone.png' },
  { name: 'Inuyasha', image: 'image/Inuyasha.png' },
  { name: 'Mushishi', image: 'image/Mushishi.png' },

];

const CategoriaAnime = () => {
  return (
    <main>
        <Header/>
      <Title>Animes</Title>
      <ObraCard title="Animes" items={animeList} />
      <Footer/>
    </main>
  );
};

export default CategoriaAnime;
