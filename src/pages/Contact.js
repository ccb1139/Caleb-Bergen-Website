import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ParticlesLandingPage from '../components/LandingPage/particlesLandingPage';

import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

import { Parallax } from 'react-parallax';
import bgGrad from "../img/backgrounds/bgGrad2.png"

import '../css/project.css'

function Contact() {
  return (
    <Parallax blur={10} bgImage={bgGrad} bgImageAlt="backgroundgrad" strength={100}  >  
      <ParticlesLandingPage main/>
      <div className="contact-me-cont container px-5 d-flex flex-wrap justify-content-center align-items-center" 
      style={{minHeight:"80vh", zIndex:"1000", position:"relative" }}>
          <ContactInfo />
          <ContactForm />
          

      </div>  
    {/* <div style={{height:"800px"}}></div> */}
   
    </Parallax>
  )
}

export default Contact