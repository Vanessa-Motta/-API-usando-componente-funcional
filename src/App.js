import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function App() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => { axios.get('https://api.tvmaze.com/search/shows?q=star%20wras').then((res) => {setFilmes(res.data)})})
  return (
    <div>
      <h1>Listar os filmes</h1>
      {filmes.map((filme) => (
        <li>
          <strong>Título: </strong>
          {filme.show.name}
          <p>{filme.show.url}</p>
        </li>
      ))}
    </div>
  );
};


