import React from 'react'
import FindMeCard from './FindMeCard';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";

import resume from '../../img/Resume.pdf'

function ContactInfo() {
  return (
    <div className='col-md-4 col-12 ' style={{minWidth:"150px"}}>
        <div className='d-flex flex-column'>
            <h3>My Links</h3>
            <FindMeCard link="mailto:calebbergen000@gmail.com" 
            icon={<AiOutlineMail size={50} className="mx-2"/>} 
            text="Email"/>
            <FindMeCard link="https://github.com/ccb1139" 
            icon={<AiFillGithub size={50} className="mx-2"/>}
            text="Github"/>
            <FindMeCard link="https://www.linkedin.com/in/caleb-bergen-62b395236"
            icon={<AiFillLinkedin size={50} className="mx-2"/>}
            text="LinkedIn"/>
            <FindMeCard link={resume}
            icon={<AiOutlineFileText size={50} className="mx-2"/>}
            text="Resume"/>

        </div>
    </div>
  )
}

export default ContactInfo