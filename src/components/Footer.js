import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import { AiFillLinkedin } from "react-icons/ai";
import BackToTopButton from "./BackToTopButton.js";

function Footer() {
  return (
    <div className="footer px-2 d-inline-flex flex-column text-center " 
    style={{position:"relative", zIndex:"1000"}}>
      <div className="container d-flex ">
        <div className="col-1">
          
        </div>      
        <div className="col-10">
          <div className="m-auto py-2">
            <h5>Find me</h5>
            <Link to="mailto:calebbergen000@gmail.com" className="nav-link d-inline-block">
              <Tilt tiltEnable={false} scale={1.1} className="">

                <AiOutlineMail size={50} className="mx-2"/>
              </Tilt>
            </Link>
            <Link to="https://github.com/ccb1139" className="nav-link d-inline-block">
              <Tilt tiltEnable={false} scale={1.05} className="d-inline-block">
                <AiFillGithub size={50} className="mx-2"/>
              </Tilt>
            </Link>
            <Link to="https://www.linkedin.com/in/caleb-bergen-62b395236" className="nav-link d-inline-block">
              <Tilt tiltEnable={false} scale={1.05} className="d-inline-block">
                <AiFillLinkedin size={50} className="mx-2"/>
              </Tilt>
            </Link>

          </div>
          
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <BackToTopButton/>
        </div>
        
      </div>
      <div className="footer-btm container mt-auto d-flex mb-2">
        <p className="m-auto">© All rights reserved by Caleb Bergen</p>          
      </div>
      
    </div>
  );
}

export default Footer;
