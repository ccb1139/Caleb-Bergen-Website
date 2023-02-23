import React from 'react'
import { Image } from 'react-bootstrap';
import ProjectPrev from '../components/ProjectPrev';
import WhatImBestAt from '../components/WhatImBestAt';
// Logo Imports
import GidLogo from '../img/project-logos/gidLogo.png';
import PantryLogo from '../img/project-logos/pantryLogo.jpg';
import umlLogo from '../img/project-logos/uml.png';
import reactLogo from '../img/project-logos/React-icon.svg.png';
import NodeLogo from '../img/project-logos/nodeJsLogo.png';
import PythonLogo from '../img/project-logos/pythonLogo.png';
import HtmlLogo from '../img/project-logos/HTML5Logo.png';
import CssLogo from '../img/project-logos/CSS-Logo.png';
import JsLogo from '../img/project-logos/JavaScript-Logo.png';

//Picture Imports
import CalebImg from '../img/calebMainPage.jpg';

function LandingPage() {
  return (
    <div className='container text-center'>
        <div className='row mx-5 mb-5'>
            <h1>Who am I?</h1>
            <hr></hr>
            <div className='container d-flex justify-content-center'>
              <div className='col-10'>
                
                <p>My name is Caleb Bergen. I am a web developer with a passion for creating innovative solutions that deliver optimal user experiences and value to businesses. I am currently seeking a position in web development where I can leverage my proficiency in a variety of web development tools to design and develop high-quality websites that meet the needs of clients and users.</p>
              </div>    
            </div>
        </div>
       
        <div className='row m-5'>
            <h1>Projects </h1>
            <hr></hr>
            <div className='container d-flex flex-wrap col-10 justify-content-center'>
              <ProjectPrev title="Get It Done" img={GidLogo} 
              description="Get-it-Done is a gamified to-do list app designed for productivity. Users can add tasks, set due dates, and earn achievements as they complete tasks. Developed at the University of Massachusetts Lowell, it's an excellent example of applying programming, user interface design, and game mechanics to create an engaging application."/>
              <ProjectPrev title="Blackboard notification re-vamp" img={umlLogo}
              description="I revamped the Blackboard LMS notification system for my Software Engineering class, making it more user-friendly. Users can view notifications in an organized and accessible way, filter by type, and search for courses. It demonstrates how software engineering can improve existing software systems."/>
              <ProjectPrev title="Pantry Pilot" img={PantryLogo}
              description="Pantry Pilot is a web app for tracking fridge contents, with easy item addition and expiration date setting. The app sends notifications before items expire. The app has potential for expansion, including an automatic recipe recommendation system based on fridge items to reduce food waste."/>

            </div>
        </div>
        <div className='row m-5'>
            <h1>Skills</h1>
            <hr></hr> 
            <div className='container d-flex flex-wrap col-10'>
              <WhatImBestAt title={"React.js"} img={reactLogo}/>
              <WhatImBestAt title={"Node.js"} img={NodeLogo}/>
              <WhatImBestAt title={"HTML"} img={HtmlLogo}/>
              <WhatImBestAt title={"CSS"} img={CssLogo}/>
              <WhatImBestAt title={"JavaScript"} img={JsLogo}/>
              <WhatImBestAt title={"Python"} img={PythonLogo}/>
            </div>
        </div>

    </div>
  )
}

export default LandingPage