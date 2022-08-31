import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function PokemonList({ pokemons }) {
  return (
    <div className="container">
      {pokemons.map(({ name }, index) => (
        <Link to={`/Pokedex/pokemon/${name}`} key={index}>
          <Button variant="outline-secondary">{name}</Button>
        </Link>
      ))}
    </div>
  );
}
