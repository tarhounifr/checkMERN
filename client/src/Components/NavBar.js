import React from 'react';
import {Navbar} from 'react-bootstrap';

export const NavBar = () => {
    return (
    <header>
   <Navbar>
  <Navbar.Brand href="#home">WC REST API</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Tarhouni Fraj</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </header>
    )
}
