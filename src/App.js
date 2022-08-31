import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} />} />
        <Route path="/pokemon/" element={<Pokemon />}>
          <Route path=":name" element={<Pokemon />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
