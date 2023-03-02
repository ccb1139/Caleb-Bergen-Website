import React, {useState, useEffect} from 'react'
import { useIntersection } from 'react-use';
import { Image } from 'react-bootstrap';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadLightInteraction } from "tsparticles-interaction-light";
import { loadCanvasMaskPlugin } from "tsparticles-plugin-canvas-mask";
// import particleOptions from './particleOptions';
import pJson from "../json/particles.json";
import particleOptions from './particleOptions';


function ParticlesLandingPage() {
    // const particleOptions = JSON.parse(JSON.stringify(pJson));


    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        loadLightInteraction(tsParticles);
        await loadFull(engine);
        await loadCanvasMaskPlugin(engine);
    }, []);
  
    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

  return (

     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleOptions}
            
        />
  )
}

export default ParticlesLandingPage