import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';



function App() {
  return (
    <BrowserRouter>
    <Routes>      
      {/* Show Home component at root URL */}
      <Route path="/" element={<Intro />} />

      {/* Other routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />

      {/* Optional: catch all unknown paths and redirect to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
