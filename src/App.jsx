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
      <div className="main-content">
      <Home />
      </div>
      <div className="about-section">
      <About />
      </div>
      <div className="project-section">
        <Projects />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
