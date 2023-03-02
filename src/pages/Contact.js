import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

import { Parallax } from 'react-parallax';
import bgGrad from "../img/backgrounds/bgGrad.png"

function Contact() {
  return (
    <Parallax blur={10} bgImage={bgGrad} bgImageAlt="the cat" strength={100} >  
    <div className="container pt-5 d-flex flex-wrap justify-content-center" style={{minHeight:"86vh"}}>
        <ContactInfo />
        <ContactForm />
        
        
        

    </div>
    </Parallax>
  )
}

export default Contact