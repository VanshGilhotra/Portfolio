import { useState } from 'react';
import './App.css';
import Home from './components/Home/home';
import Nav from './Mains/Navbar';
import About from './components/About/about';

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
    </>
  )
}

export default App
