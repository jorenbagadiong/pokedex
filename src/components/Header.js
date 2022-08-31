import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pokedex App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
