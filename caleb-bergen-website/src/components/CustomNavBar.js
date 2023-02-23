import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


function CustomNavBar() {
  return (
    <Navbar expand="lg" className='row px-4 py-1 mb-1 fixed-top app-nav-bar '>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
    
      <Nav className="mr-auto ">
        <NavbarBrand className="text-white" href="/">Caleb Bergen</NavbarBrand>
        <NavItem>
          <Link to="/aboutMe" className="nav-link text-white">About Me</Link>
        </NavItem>
        <NavItem>
            <Link to="/projects" className="nav-link text-white">Projects</Link>
        </NavItem>
        <NavItem>
            <Link to="/contact" className="nav-link text-white">Contact</Link>
        </NavItem>
      </Nav>
      <Nav className='ms-auto'>
        <NavItem className='m-1'>
          <a href="https://www.linkedin.com/in/caleb-bergen-62b395236/?trk=public-profile-join-page" target="_blank"><AiFillLinkedin size={"2em"}/></a>
        </NavItem>
        <NavItem className='m-1'>
          
          <a href="https://github.com/ccb1139" target="_blank"><AiFillGithub size={"2em"} /></a>
        </NavItem>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default CustomNavBar