import React from "react";
import pJson from "../../json/particles.json";
import { tsParticles } from "tsparticles-engine";
import { loadLightInteraction } from "tsparticles-interaction-light";

// const particleOptions = JSON.parse(JSON.stringify(pJson));
// console.log(particleOptions);


const particleOptions = {
  // fullScreen: {
  //       enable: false,
  //       zIndex: -1,
  //   },
  //   style: {
  //     position: "absolute",
  //     height : "100%",
  //     top: "0",
  //     left:"0"
  //   },
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
                distance: 75,
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
            value: 30,
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
// Seondary particles




export default particleOptions;
