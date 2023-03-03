import React from 'react'
import ParticlesLandingPage from './particlesLandingPage';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";

function WhatIOffer() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <div className='d-flex flex-column justify-content-center text-start landing-name' style={{minHeight:"90vh"}}>
                {/* <ParticlesLandingPage main/> */}
                <div className='row ' style={{marginLeft:"10%", zIndex:"1000"}}>
                    <div className="col-10  align-self-start landing-name-text no-select">
                        <p className="lp-Name" 
                        >Caleb Bergen</p>
                        <p className="lp-Title"
                        >Software Engineer</p>             

                    </div>
                </div>
                
            </div>
            <div className={(scrolled ? "see-more-exit" : "see-more-anim")}>
                <AiOutlineArrowDown/>
                <span className='px-2'>Learn More</span>
                <AiOutlineArrowDown/>
                {/* <AiOutlineArrowDown/>
                <AiOutlineArrowDown/>
                <AiOutlineArrowDown/> */}
            </div>
            {/* <div className='see-more-anim'>see more</div> */}
        </>
    )
}

export default WhatIOffer