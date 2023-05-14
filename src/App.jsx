import React, { useState } from 'react'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Header from './components/header/Header'
import Services from './components/services/Services'


const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  
    const toggleDarkMode = () => {
      setDarkMode(prevState => !prevState)
    }
    
  return (
    <>
      <Header darkMode={darkMode} />
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode}  />
      <Services darkMode={darkMode} />
      <Footer darkMode={darkMode}/>
    </>
  )
}

export default App