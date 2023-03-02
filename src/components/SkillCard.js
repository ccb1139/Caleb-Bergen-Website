import React from 'react'
import { Image } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function SkillCard({title, img, visible}) {
  const animNum = (Math.floor(Math.random() * 3) + 1).toString();

  return (
    <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>} >
      <div className={'m p-3 '+(visible ? ("sc-anim-" + animNum) : "invisible")} style={{position: "relative", }}>
          <Tilt
          className="parallax-effect"
          perspective={500}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareBorderRadius="20px"
          glarePosition="bottom"
          >
            <div className="d-flex align-items-center inner-element px-3" style={{height:"130px", width:"130px", margin:"auto"}}>
              
                <Image src={img} fluid rounded className="hover-shadow m-auto" />
              
            </div>
            
          </Tilt>

      </div>
    </OverlayTrigger>
  )
}

export default SkillCard