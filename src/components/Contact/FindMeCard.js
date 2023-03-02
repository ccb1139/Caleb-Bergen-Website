import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

function FindMeCard({link, icon, text}) {
  return (
    <Link to={link} target="_blank" className="nav-link d-inline-block my-1">
        <Tilt tiltEnable={false} scale={1.1} className="d-inline-block">
        {icon}
        {text}
        </Tilt>
        
    </Link>
  )
}

export default FindMeCard