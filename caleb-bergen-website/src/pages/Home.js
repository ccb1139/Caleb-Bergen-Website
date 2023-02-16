import React from 'react'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Work from '../components/Work'

function Home() {
  return (
    <div className='border m-5'>
        <AboutMe />
        <Skills />
        <Education />
        <Work />
    </div>
  )
}

export default Home