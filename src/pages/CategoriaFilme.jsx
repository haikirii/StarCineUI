import React from 'react';
import ObraCard from '../components/ObraCard';
import Title from '../components/Title';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const filmeList = [
  { name: 'O Senhor dos Anéis', image: 'image/the-lord-of-the-rings.png' },
  { name: 'Deadpool & Wolverine', image: 'image/deadpool-and-wolverine.png' },
  { name: 'Narnia: Príncipe Caspian', image: 'image/The Chronicles Of Narnia - Prince Caspian 1.png' },
  { name: 'Flow', image: 'image/flow.png' },
  { name: 'Alice no País das Maravilhas', image: 'image/alice-in-wonderland.png' },
  { name: 'Branca Neve', image: 'image/Rachel Zegler shares childhood photo dressed as Snow White amid flop.png' },
  { name: 'Titanic', image: 'image/Titanic.png' },
  { name: 'Wicked', image: 'image/Wicked.png' },
  { name: 'Sonic 3', image: 'image/Sonic 3 poster.png' },
  { name: 'Thunderbolts', image: 'image/Thunderbolts.png' },
  { name: 'Duna 2', image: 'image/Dune Part Two Movie Poster.png' },
  { name: 'Avatar', image: 'image/avatar.jpeg' },
  { name: 'Batman', image: 'image/batman.png' },
  { name: 'Crepusculo: Lua Nova', image: 'image/luanova.png' },
  { name: 'A Noiva Cadáver', image: 'image/noiva.png' },
  { name: 'Constantine', image: 'image/Constantine.png' },
  { name: 'Star Wars: A Vingança dos Sith', image: 'image/starw.png' },
  { name: 'Conclave', image: 'image/conclave.png' },
  { name: 'Mikey 17', image: 'image/mikey.png' },
  { name: 'O Lar das Crianças Peculiares', image: 'image/OLar.png' },
  { name: 'Oppenheimer', image: 'image/Oppenheimer.png' }, 
];

const CategoriaFilme = () => {
  return (
    <main>
        <Header/>
      <Title>Filmes</Title>
      <ObraCard title="Filmes" items={filmeList} />
      <Footer/>
    </main>
  );
};

export default CategoriaFilme;
