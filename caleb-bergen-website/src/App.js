import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CustomNavBar from './components/CustomNavBar';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <CustomNavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  );
}

export default App;
