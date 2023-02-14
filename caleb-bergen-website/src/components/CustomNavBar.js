import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg">
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
    </Navbar.Collapse> */}
    <Nav className="mr-auto">
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="/projects" className="nav-link">Projects</Link>
        </NavItem>
      </Nav>
  </Navbar>
  )
}

export default CustomNavBar