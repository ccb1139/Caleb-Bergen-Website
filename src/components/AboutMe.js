import React from 'react'
import { Image } from 'react-bootstrap';
import CalebImg from '../img/Caleb.jpg';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function AboutMe() {
  return (
    <div className='container'>
        <div className='row'>
            <Card>
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>About Me</Card.Title>
                    <hr></hr>
                    {/* <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"center"}}>Caleb Bergen</Card.Subtitle> */}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-3 d-flex ' >
                                <Image fluid src={CalebImg} rounded className="hover-shadow m-auto" style={{maxHeight:"300px", margin:"auto"}}/>
                            </div>
                            <div className='col-sm-12 col-lg-9'>
                                <h3>Objective</h3>
                                <p>To secure a position in web development where I can leverage my proficiency in a variety of web development tools to design and develop high-quality websites that meet the needs of clients and users. As an experienced web developer, I am passionate about creating innovative solutions that deliver optimal user experiences and value to businesses.</p>
                            </div> 
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>

  )
}

export default AboutMe