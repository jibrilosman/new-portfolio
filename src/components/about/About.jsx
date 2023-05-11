import React from 'react'
import './About.css'
import '../../index.css'
import Image from '../../assets/hero-4.jpg'

const About = (props) => {
  return (
    <section id='about' className={props.darkMode ? "dark" : ''}>
      <br />
      <br />
      <br />
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Image} alt="about" />
          </div>
        </div>
        <div className="about-info">
        <div className="about-place-holder">
          <h1>ABOUT</h1>
        </div>
          
          <h2>About Me</h2>
          <h5>Hello my name is Jibril Omar and I am UX/UI designer and full-stack developer</h5>
          <p>Junior Web Developer with a Diploma in Enterprise Web & Mobile Developer and a passion with coding 
            and creating websites. Organized, strong ability to communicate efficiently. 
            Ability to adapt in both self-starting and collaborative environments while staying 
            focused on achieving high-quality results under strict deadlines.</p>

            <h2>Design Tools</h2>
            <div className="hero">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Adobe Xd</span>
              <span>Figma</span>
              <span>Sketch</span>
            </div>


            <h2>Development Tools</h2>
            <div className="hero">
              <span>HTML</span>
              <span>SCSS</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Node.js</span>
              <span>php</span>
              <span>.NET</span>
              <span>SQL</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default About