import { useState, useEffect } from 'react'
import { BsArrowBarUp } from "react-icons/bs";
import Tilt from 'react-parallax-tilt';

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showButton &&
        <Tilt tiltEnable={false} scale={1.05} className="ms-auto" style={{cursor:"pointer"}}>
            <BsArrowBarUp size={50} className="mx-2" onClick={handleButtonClick}/>
        </Tilt>
        
      }
    </>
  )
}

export default BackToTopButton