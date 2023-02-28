import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import SkillCard from './SkillCard';
// Logo Imports

import reactLogo from '../img/project-logos/React-icon.svg.png';
import NodeLogo from '../img/project-logos/nodeJsLogo.png';
import PythonLogo from '../img/project-logos/pythonLogo.png';
import HtmlLogo from '../img/project-logos/HTML5Logo.png';
import CssLogo from '../img/project-logos/CSS-Logo.png';
import JsLogo from '../img/project-logos/JavaScript-Logo.png';

import { AiOutlineUser } from "react-icons/ai";

function AboutLandingPage({animate}) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);
  const intersection = useIntersection(animatedRef, { threshold: 0.5 });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
    }
  }, [intersection]);


  const [_animate, setAnimate] = useState(animate)


  console.log(animate)
  return (
    <>
    <h1>About </h1>
    <hr></hr>
    <div className={'container col-10 justify-content-center ' + (isVisible ? "skills-div" : "invisible")} ref={animatedRef}>
        <div className="row vh-100 align-content-center " >
            <div className='col-4 mt-5'>
                <AiOutlineUser size={100} />
                <p className='text-center text-wrap col-10 m-auto'>
                To secure a position in web development where I can leverage my proficiency in a variety of web development tools to design and develop high-quality websites that meet the needs of clients and users. As an experienced web developer, I am passionate about creating innovative solutions that deliver optimal user experiences and value to businesses.
                </p>
                
            </div>
            <div className={'d-flex flex-wrap col-8 justify-content-center ms-auto' + (isVisible ? "" : "invisible")}>
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