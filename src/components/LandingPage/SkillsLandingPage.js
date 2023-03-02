import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import SkillCard from './SkillCard';
import { Image } from 'react-bootstrap';
import ParticlesLandingPage from './particlesLandingPage';
import { useCallback } from "react";


//Particle Imports
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleOptions from './particleOptions';

// Logo Imports

import reactLogo from '../../img/project-logos/React-icon.svg.png';
import NodeLogo from '../../img/project-logos/nodeJsLogo.png';
import PythonLogo from '../../img/project-logos/pythonLogo.png';
import HtmlLogo from '../../img/project-logos/HTML5Logo.png';
import CssLogo from '../../img/project-logos/CSS-Logo.png';
import JsLogo from '../../img/project-logos/JavaScript-Logo.png';
import CalebPic from '../../img/calebMainPage.jpg';
import CalebPic2 from '../../img/Caleb.jpg';

import { AiOutlineUser } from "react-icons/ai";

function AboutLandingPage({animate}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const animatedRef = useRef(null);
  const intersection = useIntersection(animatedRef, { threshold: 0.5 });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
      setTimeout(function() {
        setIsVisible2(true);
      }, 1400);
      
    }
  }, [intersection]);



  // console.log(animate)
  return (
    <>
    
    <h1>About </h1>
    <hr></hr>
    <div className={'container col-10 justify-content-center ' + (isVisible ? "skills-div" : "invisible")} ref={animatedRef} style={{minWidth:"250px"}}>
    
        <div className="row align-content-center " style={{minHeight:"100vh"}}>
            <div className='col-lg-6 col-md-12'>
                {/* <AiOutlineUser size={100} /> */}
                <Image src={CalebPic2} fluid alt="Caleb Photo" className="drop-shadow-filter" style={{borderRadius:"20px", maxWidth:"250px", marginBottom:"50px",}} />
                
                <p className='text-center text-wrap col-10 m-auto prev-text'>
                As a web developer, I am passionate about designing and developing high-quality websites that meet the needs of clients and users. As a reliable and organized individual with excellent communication skills, I am confident in my ability to create innovative solutions that deliver optimal user experiences and value to businesses. I am excited to bring my skills and expertise to your team.
                </p>
                
            </div>
            <div className={'d-flex flex-wrap col-lg-6 col-md-12 justify-content-center align-content-center ms-auto ' + (isVisible2 ? "" : "invisible")}>
                <SkillCard title={"React.js"} img={reactLogo} visible={isVisible}/>
                <SkillCard title={"Node.js"} img={NodeLogo} visible={isVisible}/>
                <SkillCard title={"HTML"} img={HtmlLogo} visible={isVisible}/>
                <SkillCard title={"CSS"} img={CssLogo} visible={isVisible}/>
                <SkillCard title={"JavaScript"} img={JsLogo} visible={isVisible}/>
                <SkillCard title={"Python"} img={PythonLogo} visible={isVisible}/>
            </div>
        

        </div>
    </div>
    </>
  )
}

export default AboutLandingPage