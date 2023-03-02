import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import resume from '../img/Resume.pdf'

function ContactInfo() {
  return (
    <div className='col-xl-4 col-12 p-5'>
        <div>
            <h3>Where to find me</h3>
            <ListGroup>
                <ListGroup.Item>Email:
                    <a href="mailto:calebbergen000@gmail.com">calebbergen000@gmail.com</a>
                </ListGroup.Item>
                <ListGroup.Item>Phone: (978)-793-3583 </ListGroup.Item>
                <ListGroup.Item>LinkedIn:
                    <a href="https://www.linkedin.com/in/caleb-bergen-62b395236/?trk=public-profile-join-page" target="_blank">Caleb Bergen</a>
                </ListGroup.Item>
                <ListGroup.Item>Github:
                    <a href="https://github.com/ccb1139" target="_blank">ccb1139</a>
                </ListGroup.Item>
                <ListGroup.Item>
                    Resume:
                    <Link to={resume}>Resume</Link>
                </ListGroup.Item>


            </ListGroup>

        </div>
    </div>
  )
}

export default ContactInfo