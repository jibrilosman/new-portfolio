import React from 'react'
import './About.css'
import '../../index.css'

const About = (props) => {
  return (
    <section id='about' className={props.darkMode ? "dark" : ''}><h1>About goes here</h1></section>
  )
}

export default About