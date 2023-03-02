import React, { useEffect, useRef, useState } from 'react';
import ParticlesLandingPage from '../components/LandingPage/particlesLandingPage';
import WhatIOffer from '../components/LandingPage/WhatIOffer';
import ProjectPreviews from '../components/LandingPage/ProjectPreviews';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import AboutLandingPage from '../components/LandingPage/SkillsLandingPage';
import '../css/landpageKF.css'

//Picture Imports
import CalebImg from '../img/calebMainPage.jpg';
import bgGrad from "../img/backgrounds/bgGrad.png"
import waterColorBg from "../img/backgrounds/watercolor.jpg"
import grad2 from "../img/backgrounds/grad2.jpg"
import grad3 from "../img/backgrounds/grad3.jpg"

function LandingPage() {

  return (
    <div className='text-center ' style={{ maxWidth: "100%" }}>
      <Parallax blur={10} bgImage={bgGrad} bgImageAlt="the cat" strength={100} >
        <ParticlesLandingPage main/>
        <div className='lpd lpd-t vh-100  ' >

          <WhatIOffer />
        </div>
        {/* <LandingPageBottom /> */}
        <div className="lpd-b row" style={{position:"relative"}}>
          {/* <ParticlesLandingPage /> */}
          <div className='lpd'>

            <AboutLandingPage animate={true} />
          </div>
          <div className='lpd'>
            <ProjectPreviews />
          </div>
        </div>
      </Parallax>



    </div>
  )
}

export default LandingPage