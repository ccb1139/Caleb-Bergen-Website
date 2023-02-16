import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Contact() {
  return (
    <div className="container">
        <div className='row'>
            <div className='col-5'>
                <ContactInfo />
            </div>
            <div className='col-5'>
                <ContactForm />
            </div>
        </div>
        
        
        

    </div>
  )
}

export default Contact