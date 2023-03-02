import React from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Education from '../components/AboutMe/Education'
import Skills from '../components/AboutMe/Skills'
import Work from '../components/AboutMe/Work'
import '../css/project.css'


function Home() {
  return (
    <div className='d-grid gap-5 '>
        <AboutMe />
        <Skills />
        <Education />
        <Work />
    </div>
  )
}

export default Home