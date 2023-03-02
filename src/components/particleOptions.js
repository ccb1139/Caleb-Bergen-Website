import React from "react";
import pJson from "../json/particles.json";
import { tsParticles } from "tsparticles-engine";
import { loadLightInteraction } from "tsparticles-interaction-light";

// const particleOptions = JSON.parse(JSON.stringify(pJson));
// console.log(particleOptions);

const particleOptions_snow = {
  fps_limit: 60,
  background: {
    color: "#0d47a1",
    opacity: 0,
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onDiv: [
        {
          enable: true,
          selectors: ".container ",
          mode: "bounce",
          type: "rectangle",
        },
        {
          enable: true,
          selectors: ".bounce.circle",
          mode: "bounce",
          type: "circle",
        },
      ],
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 6,
        color: "#000000",
      },
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      gravity: {
        enable: true,
      },
      bounce: false,
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
        top: "none",
        bottom: "destroy",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 0,
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.1,
        speed: 40,
        sync: false,
      },
      random: { enable: true, minimumValue: 1 },
      value: 5,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
  emitters: [
    {
      direction: "left",
      position: {
        x: 50,
        y: 0,
      },
      size: {
        width: 100,
        height: 0,
      },
      rate: {
        quantity: 2,
        delay: 0.1,
      },
    },
  ],
};

function pixelTextFilter(pixel) {
    return pixel.a > 0;
  }

const particleOptions_name = {
    smooth: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 15
        }
      }
    },
    particles: {
      move: {
        direction: "none",
        distance: 2,
        enable: true,
        outModes: "none",
        speed: 0.5
      },
      number: {
        value: 2000
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {
          min: 5,
          max: 10
        },
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      },
      stroke: {
        width: 1,
        color: "#000"
      },
      opacity: {
        value: { min: 0, max: 1 },
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      },
      color: {
        value: {
          h: 0,
          s: 100,
          l: { min: 30, max: 70 }
        },
        animation: {
          enable: true,
          speed: 60,
          sync: true
        }
      }
    },
    canvasMask: {
      override: {
        color: false
      },
      enable: true,
      scale: 1,
      pixels: {
        filter: "pixelTextFilter"
      },
      position: {
        x: 50,
        y: 50
      },
      text: {
        color: "#ff0000",
        font: {
          family: "verdana",
          size: 200,
          weight: 100
        },
        text: "Caleb Bergen"
      }
    },
    background: {
      color: "#fff",
      opacity: 0,
    }
};

const particleOptions_fancy = {
    background: {
        color: "#000",
        opacity: 0,
      },
      emitters: [
        {
          position: {
            x: 50,
            y: 50
          },
          size: {
            height: 100
          },
          particles: {
            move: {
              direction: "left"
            }
          }
        },
        {
          position: {
            x: 50,
            y: 50
          },
          size: {
            height: 100
          },
          particles: {
            move: {
              direction: "right"
            }
          }
        }
      ],
      particles: {
        number: {
          value: 0
        },
        move: {
          enable: true,
          straight: true,
          speed: 3,
          outModes: "destroy",
          trail: {
            enable: true,
            length: 30,
            fill: {
              color: "#000",
            }
          }
        }
      }

}

const particleOptions = {
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
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
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
            distance: 150,
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
            value: 80,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
loadLightInteraction(tsParticles);
const particleOptions_light = {
    fpsLimit: 60,
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: ["circle", "square"]
    },
    opacity: {
      value: 1
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 15
      }
    },
    rotate: {
      value: 0,
      direction: "clockwise",
      animation: {
        speed: 5,
        enable: true
      }
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      outModes: { default: "out" }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "light"
      },
      resize: true
    },
    modes: {
      light: {
        area: {
          gradient: {
            start: "3b5e98",
            stop: "#17163e"
          }
        },
        shadow: {
          color: "#17163e"
        }
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#17163e",
    opacity: 0
  }
};

export default particleOptions;
