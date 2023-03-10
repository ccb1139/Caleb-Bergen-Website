import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { GiArrowCursor } from "react-icons/gi";

function SkillCard({title, img, visible, animate}) {
  const animNum = (Math.floor(Math.random() * 3) + 1).toString();
  const [touched, setTouched] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [fadeOutClass, setFadeOutClass] = useState(false);

  useEffect(() => {
    console.log("touched: " + touched)
    console.log("animationEnded: " + animationEnded)
    if (touched && animationEnded) {
      console.log("touched and animation ended")
      setFadeOutClass(true); 
    }
  }, [animationEnded])

  useEffect(() => {
    console.log(animationEnded)
  }, [animationEnded])

  function handleAnimationEnd() {
    setAnimationEnded(true);
  }

  function handleAnimationIteration(event) {
    console.log(event.animationName)
    if (event.animationName === "moveMouse") {
      setAnimationEnded(true);
    } else {
      setAnimationEnded(false);
    }
  }
  
  const handleTouch = () => {
    setTouched(true);
  }

  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>} >
      <div
        className={'m p-3 '+(visible ? ("sc-anim-" + animNum) : "invisible")}
        style={{position: "relative"}}
        onMouseEnter={handleTouch}
        onTouchStart={handleTouch}
      >
        {animate ? <GiArrowCursor size={20} className={"arrow-cursor-move " + ( (fadeOutClass) ? "arrow-cursor-anim-out" : "arrow-cursor-anim")} onAnimationEnd={handleAnimationEnd} onAnimationIteration={handleAnimationIteration} /> : null}
        <Tilt
          className="parallax-effect "
          perspective={500}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareBorderRadius="20px"
        >
          <div className="d-flex align-items-center inner-element px-3" style={{height:"130px", width:"130px", margin:"auto"}}>
            <Image src={img} fluid rounded className="hover-shadow m-auto drop-shadow-filter" />
          </div>
        </Tilt>
      </div>
    </OverlayTrigger>
  )
}


export default SkillCard;
