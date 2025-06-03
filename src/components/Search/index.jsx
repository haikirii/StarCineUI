import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const falseApi = [
  {
    title: "Arcane",
    date: "2021 - 2024",
    image: "image/Arcane League of Legends TV Poster 1.png"
  },
  {
    title: "One Piece",
    date: "1999 - Andamento",
    image: "image/one-piece.png"
  },
  {
    title: "Bleach",
    date: "2004 - 2012",
    image: "image/bleach.png"
  },
];

const SearchResult = ({ searchTerm }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const filtered = falseApi.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  }, [searchTerm]);

 
  return (
    <div className={styles.container}>
      {results.length > 0 ? (
        <>
          <h2>Pesquisar: {searchTerm}</h2>
          {results.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2>Nenhum resultado encontrado para "{searchTerm}"</h2>
      )}
    </div>
  );
};

export default SearchResult;
