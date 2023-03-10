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
      {/* <p className='invisible'>back</p> */}
      {showButton &&
        <Tilt className="ms-auto d-flex justify-content-center align-items-center bttb"
          tiltEnable={false} 
          scale={1.1} 
          style={{ cursor: "pointer", zIndex: "1001", }}
          >
          <BsArrowBarUp size={60} className="mx-2 p-2 drop-shadow-filter" onClick={handleButtonClick}
             />
        </Tilt>

      }
    </>
  )
}

export default BackToTopButton