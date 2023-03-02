import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CustomNavBar from './components/CustomNavBar';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

import './css/project.css'

// Colors
//  https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff

function App() {
  return (
    <>
      <CustomNavBar/>
      <div className='content-window'>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutMe" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
       <Footer className='row'/>
    </>
  );
}

export default App;
