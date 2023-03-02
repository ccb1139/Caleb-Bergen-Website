import React, { useState, useEffect, useRef } from "react";
import { useIntersection } from 'react-use';
import { Image } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import Tilt from 'react-parallax-tilt';

import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectPrev({ title, img, description, link, GithubLink, skills, flipped }) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);
  const intersection = useIntersection(animatedRef, { threshold: 0.5 });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
      
    }
  }, [intersection]);

  const [_flipped, setFlipped] = useState(flipped);
  // const [flippedMClass, setFlippedMClass] = useState("ms-auto");
  const flippedMClass = flipped ? "ms-auto" : "me-auto"
  const target = useRef(null);
  const isNotSmallScreen = useMediaQuery({ query: '(min-width: 992px)' })



  useEffect(() => {
    if (isNotSmallScreen) {
      setFlipped(flipped);

    } else {
      setFlipped(false);
    }
  }, [isNotSmallScreen]);


  function openNewLink(e, value) {
    // const value = e.target.value;
    // console.log(e);
    if (value === "progLink") {
        window.open(link, '_blank');
    } else if (value === "gitLink") {
        window.open(GithubLink, '_blank');
    }
  }
  // (isVisible ? ( flipped ? "proj-left-anim" : "proj-right-anim") : "invisible" )
  const tiltImg = (
    <div className="col-sm-12 col-lg-8 mt-5" ref={animatedRef}>
        <Link to="/projects" className={"reset-a col-auto cursor-change "}>
            <Tilt 
            scale={1.05}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            >
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Click to see more</Tooltip>}>
              <Image
              fluid
              src={img}
              rounded
              className="hover-shadow m-auto m-1"
              style={{ maxHeight: "450px", width:"auto", margin: "auto" }}
              />
              </OverlayTrigger>
            </Tilt>
        </Link>
      </div>
  )

  return (
    <div className={"row vh-100 align-content-center " + (isVisible ? ( flipped ? "proj-left-anim" : "proj-right-anim") : "" )} >
      {_flipped ? tiltImg : null}
      
      <div className={"col-sm-12 col-lg-4 d-flex flex-column align-items-center justify-content-center " + (_flipped ? "ms-auto" : "me-auto")}>

        <div className="col-12">
          <h2 className="text-start">{title}</h2>
          <p className="prev-text">{description}</p>
        </div>
        <div className="col-12 text-start justify-content-start">
          <h5>Techs:</h5>
          {skills?.map((tech, index) => {
              return (
                  <Badge pill bg="dark" className='m-1' key={index}>{tech}</Badge>
              )
          })
          }
        </div>

        <div className="col-12 d-flex mt-3">
          {GithubLink ? <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">View Project</Tooltip>}>
            <div className='px-2 ' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'gitLink')}>
            <Tilt tiltEnable={false} scale={1.1} className="">

              <AiFillGithub size={"2em"} />
            </Tilt>
                
            </div>
          </OverlayTrigger>
          : null}
          {link ? <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Live Website</Tooltip>}>
            <div className='px-2 ' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'progLink')}>
                
                <Tilt tiltEnable={false} scale={1.1} className="">

                  <FaExternalLinkAlt size={"2em"} />
                </Tilt>
            </div>
          </OverlayTrigger>
          : null}
        </div>
        
      </div>    

      {_flipped ? null : tiltImg}
    </div>
  );
}

export default ProjectPrev;
