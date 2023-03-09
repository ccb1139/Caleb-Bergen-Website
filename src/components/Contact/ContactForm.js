import React from 'react'
import {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Tilt from 'react-parallax-tilt';
import { AiOutlineSend } from "react-icons/ai";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(form);
      // const name = formData.get('name');
      // const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      const mailtoLink = `mailto:calebbergen000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}`)}`;
      window.location.href = mailtoLink;
    }
    setValidated(true);
  };


  return (
    <div className='col-md-8 col-12 '>
        <h3>Send me an email</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className='d-grid gap-3'>
  
            {/* <Form.Control type="text" placeholder="Name" name="name" required /> */}
            {/* <Form.Control type="email" placeholder="Enter email" name="email" required /> */}
            <Form.Control type="text" placeholder="Subject" name="subject" required />
            <Form.Control as="textarea" placeholder="Message" name="message" rows={5} required /> 
                
                
            </Form.Group>
            <Tilt tiltEnable={false} scale={1.1} className="d-inline-block">

            <button type="submit" className='form-sub-btn'><AiOutlineSend size={35} className=""/> Send</button>
            </Tilt>
            {/* <FindMeCard  */}

        </Form>

    </div>
  )
}

export default ContactForm