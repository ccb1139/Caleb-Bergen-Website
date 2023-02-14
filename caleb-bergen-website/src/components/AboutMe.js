import React from 'react'
import { Image } from 'react-bootstrap';
import CalebImg from '../img/Caleb.jpg';
import { useState, useEffect } from "react";

function AboutMe() {
  return (
    <div className='container'>
        <div className='row'>
            <h1>About Me</h1>
        </div>
        <div className='row'>
            <div className='col-6'>
                <h3>Caleb Bergen</h3>
                <Image fluid src={CalebImg} roundedCircle style={{height:"300px"}}/>
            </div>
            <div className='col-6'>
                <h3>Objective</h3>
                <p>To secure a position in web development where I can leverage my proficiency in a variety of web development tools to design and develop high-quality websites that meet the needs of clients and users. As an experienced web developer, I am passionate about creating innovative solutions that deliver optimal user experiences and value to businesses.</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default AboutMe