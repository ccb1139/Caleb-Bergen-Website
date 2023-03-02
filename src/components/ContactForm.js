import React from 'react'
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <div className='col-xl-8 col-12 p-5'>
        <h3>Send me a message</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className='d-flex flex-column'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" required/>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Subject" required />
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} required/>
                
                <Button variant="primary" type="submit" className='mt-3' onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form.Group>

        </Form>

    </div>
  )
}

export default ContactForm