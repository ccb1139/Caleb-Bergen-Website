import React from 'react'
import ProjectPrev from '../components/ProjectPrev';
import { Parallax } from 'react-parallax';

import gid_signin from '../img/get-it-done-img/sign-in.png'
import GidLogo from '../img/project-logos/gidLogo.png';
import PantryLogo from '../img/project-logos/pantryLogo.jpg';
import umlLogo from '../img/project-logos/uml.png';

import gid_landingpage from '../img/get-it-done-img/landingpage.png'
import lms_Notifications from '../img/lms-img/notifcations.png'

function ProjectPreviews() {
  return (
    <>
      <h1>Projects </h1>
      <hr></hr>
      <div className='container col-10 justify-content-center'>
        
        <ProjectPrev title="Get It Done" img={gid_landingpage} link={"https://get-it-done-gamefied.web.app/"} GithubLink={"https://github.com/ccb1139/Get-it-Done-Gamified-to-do-list"}
        skills={["React", "Firebase", "Bootstrap", "Node.js", "JavaScript", "HTML", "CSS"]}
        flipped
        description="A gamified to-do list app designed to boost productivity"/>
        
        <ProjectPrev title="Blackboard Notifications" img={lms_Notifications} GithubLink={"https://github.com/ccb1139/lms"}
        skills={["React", "Heroku", "Tailwind CSS", "Node.js", "JavaScript", "HTML", "CSS", "npm"]}
        description="Revolutionizing the Blackboard LMS notification system"/>
        
        <ProjectPrev title="Pantry Pilot (In Development)" img={PantryLogo} GithubLink={"https://github.com/ccb1139/Workout-React-App"}
        skills={["React", "MongoDB", "Bootstrap", "Node.js", "JavaScript", "HTML", "CSS"]}
        flipped
        description="Pantry Pilot is the ultimate solution for tracking fridge contents, it's a game-changer in reducing food waste."/>
    
      </div>
    </>
  )
}

export default ProjectPreviews