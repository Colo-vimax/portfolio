import React from 'react'


// components
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Hero from './components/Hero'

const App = () => {
  return (
    <div data-theme="dracula">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
      
    </div>
  )
}

export default App