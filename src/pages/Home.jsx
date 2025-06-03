import React from 'react';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import Ranking from '../components/Ranking';
import Header from '../components/Header';
import Footer from '../components/Footer';

const animeData = [{ src: 'image/bleach.png', alt: 'Bleach', title: 'Bleach' },
          { src: 'image/attack-on-titan-poster-22 1.png', alt: 'Attack on Titan', title: 'Attack on Titan' },
          { src: 'image/one-piece.png', alt: 'One Piece', title: 'One Piece', link: 'onepiece' },
          { src: 'image/the-apothecary-diaries.png', alt: 'The Apothecary Diaries', title: 'The Apothecary Diaries' },
          { src: 'image/kaiju-no-8 1.png', alt: 'Kaiju No. 8', title: 'Kaiju No. 8' },
          { src: 'image/Naruto Shippuden.png', alt: 'Naruto Shippuden', title: 'Naruto Shippuden' },
          { src: 'image/blue-exorcist.png', alt: 'Blue Exorcist', title: 'Blue Exorcist' },
          { src: 'image/Black clover HD.png', alt: 'Black Clover', title: 'Black Clover' },
          { src: 'image/Boku no Hero Academia, season 1 (1).png', alt: 'My Hero Academia', title: 'My Hero Academia' },
          { src: 'image/SOLO LEVELING WALLPAPER.png', alt: 'Solo Leveling', title: 'Solo Leveling' },
          { src: 'image/My Anime For Life.png', alt: 'Hunter X Hunter', title: 'Hunter X Hunter' },
          { src: 'image/Demon Slayer Posters.png', alt: 'Demon Slayer', title: 'Demon Slayer' },];

const filmeData = [{ src: 'image/the-lord-of-the-rings.png', alt: 'The Lord of the Rings', title: 'The Lord of the Rings' },
          { src: 'image/deadpool-and-wolverine.png', alt: 'Deadpool & Wolverine', title: 'Deadpool & Wolverine' },
          { src: 'image/The Chronicles Of Narnia - Prince Caspian 1.png', alt: 'Narnia: Prince Caspian', title: 'Narnia: Prince Caspian' },
          { src: 'image/flow.png', alt: 'Flow', title: 'Flow' },
          { src: 'image/alice-in-wonderland.png', alt: 'Alice in Wonderland', title: 'Alice in Wonderland' },
          { src: 'image/Rachel Zegler shares childhood photo dressed as Snow White amid flop.png', alt: 'Branca Neve', title: 'Branca Neve' },
          { src: 'image/Titanic.png', alt: 'Titanic', title: 'Titanic' },
          { src: 'image/Wicked.png', alt: 'Wicked', title: 'Wicked' },
          { src: 'image/Sonic 3 poster.png', alt: 'Sonic 3', title: 'Sonic 3' },
          { src: 'image/Thunderbolts.png', alt: 'Thunderbolts', title: 'Thunderbolts' },
          { src: 'image/Dune Part Two Movie Poster.png', alt: 'Dune 3', title: 'Dune 3' },
          { src: 'image/Constantine.png', alt: 'Constantine', title: 'Constantine' },];  
const serieData = [{ src: 'image/Game of Thrones (2011).png', alt: 'Game of Thrones', title: 'Game of Thrones', link:'gameofthrones' },
          { src: 'image/Moonlight Mystique (1) 1.png', alt: 'Moonlight Mystique', title: 'Moonlight Mystique' },
          { src: 'image/la casa de papel 1.png', alt: 'La Casa de Papel', title: 'La Casa de Papel' },
          { src: 'image/wanda 1.png', alt: 'WandaVision', title: 'WandaVision' },
          { src: 'image/Arcane League of Legends TV Poster 1.png', alt: 'Arcane', title: 'Arcane', link: 'arcane' },
          { src: 'image/Frasier (1).png', alt: 'Frasier', title: 'Frasier' },
          { src: 'image/baixados (1).png', alt: 'The Handmaid\'s Tale', title: 'The Handmaid\'s Tale' },
          { src: 'image/You.png', alt: 'You', title: 'You' },
          { src: 'image/baixados (4).png', alt: 'Gossip Girl', title: 'Gossip Girl' },
          { src: 'image/baixados (3).png', alt: 'The BigBang Theory', title: 'The BigBang Theory' },
          { src: 'image/The walking dead.png', alt: 'The walking dead', title: 'The walking dead' },
          { src: 'image/friends.png', alt: 'Friends', title: 'Friends' },];

const rankingData = [{ rank: 1, src: 'image/flow2.png', title: 'Flow', stars: '★★★★☆' },
            { rank: 2, src: 'image/GameofThrones2.png', title: 'Game of Thrones', stars: '★★★★★' },
            { rank: 3, src: 'image/Demon2.png', title: 'Demon Slayer', stars: '★★★★★' },
            { rank: 4, src: 'image/sololeving2.png', title: 'Solo Leveling', stars: '★★★★☆' },
            { rank: 5, src: 'image/Arcane2.png', title: 'Arcane', stars: '★★★☆☆' },
            { rank: 6, src: 'image/Dune2.png', title: 'Duna: Parte 2', stars: '★★★☆☆' }]; 

const Home = () => {

  return (
    <>
    <Header/>
      <Title>Animes</Title>
      <Carousel data={animeData} />
      
      <Title>Filmes</Title>
      <Carousel data={filmeData} />
      
      <Title>Séries</Title>
      <Carousel data={serieData} />
      
      <Title>Obras mais bem avaliadas</Title>
      <Ranking data={rankingData} />
    <Footer/>
    </>
  );
};

export default Home;

