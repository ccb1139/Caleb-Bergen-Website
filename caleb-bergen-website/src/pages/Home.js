import React from 'react'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className='border m-5'>
        <AboutMe />
        <Skills />
        <Education />
    </div>
  )
}

export default Home