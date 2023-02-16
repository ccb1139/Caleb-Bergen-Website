import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';


function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg" className='mx-4 my-1'>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
    </Navbar.Collapse> */}
      <Nav className="mr-auto">
        <NavbarBrand href="/">Caleb Bergen</NavbarBrand>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="/projects" className="nav-link">Projects</Link>
        </NavItem>
        <NavItem>
            <Link to="/contact" className="nav-link">Contact</Link>
        </NavItem>
      </Nav>
      <Nav className='ms-auto'>
        <NavItem className='m-1'>
          <a href="https://www.linkedin.com/in/caleb-bergen-62b395236/?trk=public-profile-join-page" target="_blank">LinkedIn</a>
        </NavItem>
        <NavItem className='m-1'>
          <a href="https://github.com/ccb1139" target="_blank">GitHub</a>
        </NavItem>
      </Nav>
  </Navbar>
  )
}

export default CustomNavBar