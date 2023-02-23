import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';

function ProjectPrev({title, img, description, link}) {
  const [show, setShow] = useState(false);
  const target = useRef(null);


  return (
    <Link to="/projects" className='reset-a col-4' >
        <div className='prog-prev ' >
            <h5>{title}</h5>
            <Image fluid src={img} rounded className="hover-shadow m-auto m-1" style={{height:"150px", margin:"auto"}}/>
            <p>{description}</p> 
        </div>
    </Link>
    
    
  )
}

export default ProjectPrev