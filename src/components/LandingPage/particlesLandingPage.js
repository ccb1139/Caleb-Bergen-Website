import React, {useState, useEffect} from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleOptions from './particleOptions';


function ParticlesLandingPage({main}) {
    // const particleOptions = JSON.parse(JSON.stringify(pJson));
    const particleOptions2 = {
        // fullScreen: {
        //     enable: false,
        //     zIndex: -1,
        // },
        // style: {
        //   position: "absolute",
        //   height : "100%",
        //   top: "0",
        //   left:"0"
        // },
        background: {
            color: {
                value: "#0d47a1",
                
            },
            opacity: 0,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onDiv: [
                  {
                    enable: false,
                    selectors: ".avoid ",
                    mode: "repulse",
                    type: "rectangle",
                  },
                ],
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 70,
                    duration: 20,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 115,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.8,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        // detectRetina: true,
      };

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
  
    const particlesInitAlt = useCallback(async engine2 => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine2);
    }, []);
    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

  return (
    <>
     <Particles
            id={"tsparticles" + (main ? "Main" : "Secondary")}
            init={(main ? particlesInit : particlesInitAlt)}
            loaded={particlesLoaded}
            options={(main ? particleOptions2 : particleOptions)}
            style={{zIndex: -1}}
        />
        </>
  )
}

export default ParticlesLandingPage