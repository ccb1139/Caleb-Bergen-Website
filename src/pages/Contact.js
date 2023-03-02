import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

import { Parallax } from 'react-parallax';
import bgGrad from "../img/backgrounds/bgGrad2.png"

function Contact() {
  return (
    <Parallax blur={10} bgImage={bgGrad} bgImageAlt="backgroundgrad" strength={100}  >  
    
      <div className="container pt-5 d-flex flex-wrap justify-content-center" 
      style={{minHeight:"80vh" }}>
          <ContactInfo />
          <ContactForm />
          

      </div>  
    {/* <div style={{height:"800px"}}></div> */}
   
    </Parallax>
  )
}

export default Contact