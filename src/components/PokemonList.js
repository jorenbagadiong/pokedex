import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

import classes from "./PokemonList.module.css";

export default function PokemonList({ pokemons }) {
  return (
    <Container fluid className={classes.container}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Container fluid className={classes.pokemonList}>
            {pokemons.map(({ name }, index) => (
              <Link to={`/pokemon/${name}`} key={index}>
                <Button variant="outline-secondary" size="lg">
                  <span>{name}</span>
                </Button>
              </Link>
            ))}
          </Container>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
}
