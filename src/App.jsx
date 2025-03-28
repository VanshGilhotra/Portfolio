import { useState } from 'react';
import './App.css';
import Home from './components/Home/home';
import Nav from './Mains/Navbar';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './Mains/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="main-content" id='home-content'>
      <Home />
      </div> 
     <div className="about-section" id='about-content'>
      <About/>
      </div>
      <div className="project-section" id='project-content'>
        <Projects />
      </div>
      <div className="contact-section" id='contact-content'>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
