import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Contact() {
  return (
    <div className="container pt-5 d-flex justify-content-center" style={{height:"86vh"}}>
        <ContactInfo />
        <ContactForm />
        
        
        

    </div>
  )
}

export default Contact