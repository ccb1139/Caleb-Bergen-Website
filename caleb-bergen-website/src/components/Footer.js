import React from "react";
import { Image } from 'react-bootstrap';
import Resume from "../img/Resume.png";
import ResumePDF from "../img/Resume.pdf";


function Footer() {
  return (
    <div className="footer px-2 pt-2 d-flex flex-column text-center  ">
      <div className="container ">
        <div className="row">
          <div className="col-4">
            <h5>Reach Me</h5>
            <p>Email: <a href="mailto:calebbergen000@gmail.com?">calebbergen000@gmail.com</a> </p>
            <p>Phone: 978-793-3583 </p>
          </div>
          <div className="col-4">
            <h5>Find me</h5>
          </div>
          <div className="col-4">
            <h5>Resume</h5>
            <a href={ResumePDF} target="_blank" rel="noreferrer">
            <Image className="ResumeIMG" fluid src={Resume} alt="Resume" style={{height:"220px"}} />
            </a>
            <p className="fst-italic">Click to view</p>
          </div>
        </div>
      </div>
      <div className="footer-btm container mt-auto">
          <p>© All rights reserved by Caleb Bergen</p>
      </div>
    </div>
  );
}

export default Footer;
