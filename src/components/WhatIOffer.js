import React from 'react'
import ParticlesLandingPage from '../components/particlesLandingPage';

function WhatIOffer() {
    

    return (
        <>
            
            <div className='d-flex flex-column vh-100 justify-content-center text-start landing-name' >
                
                <div className='row ' style={{marginLeft:"10%", zIndex:"1000"}}>
                    <div className="col-10  align-self-start landing-name-text no-select">
                        <p style={{fontSize: "8em", marginBottom: "0px"}} className=""
                        >Caleb Bergen</p>
                        <p style={{fontSize: "4em"}}
                        >Software Engineer</p>             

                    </div>
                </div>
                <ParticlesLandingPage />
            </div>
        </>
    )
}

export default WhatIOffer