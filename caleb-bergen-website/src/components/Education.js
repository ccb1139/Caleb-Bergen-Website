import React from 'react'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function Education() {
  return (
    <div className='container'>
        <div className='row'>
        <Card>
            <Card.Body>
                <Card.Title>University of Massachusetts Lowell</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Lowell, MA</Card.Subtitle>
                <Card.Text>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>May 2021</h5>
                    <p>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Architecture, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning, Computer Graphics, Computer Vision, Web Development, Mobile Development, Software Testing, Software Design, Software Project Management, Software Quality Assurance, Software Security, Software Engineering Capstone</p>
                </Card.Text>

            </Card.Body>
        </Card>
        </div>
    </div>
    

  )
}

export default Education