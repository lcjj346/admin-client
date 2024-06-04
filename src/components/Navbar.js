import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
