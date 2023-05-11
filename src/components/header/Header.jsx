import React from 'react'
import './Header.css'
import '../../index.css'
import Image1 from '../../assets/hero-5.jpg'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'

const Header = (props) => {
  return (
    <header className={props.darkMode ? 'dark' : ''}>
        <div className='container header-container'>
            <div className="hero-info">
                <h3>Hi There, I'm</h3>
                <h1>Jibril Omar</h1>
                <h2>Full-Stack Developer</h2>
                <p>I am a full-stack developer based in Toronto, Canada.
                  I have a passion for web development and love to create for web and mobile devices.</p>
                  <CTA />
                <div className="place-holder">
                    <h1>
                        O
                        <br/>
                        M
                        <br/>
                        A
                        <br/>
                        R
                    </h1>
                </div>
            </div>
            <div className="hero-image">
                <img src={Image1} alt="" />
                <HeaderSocials />
            </div>
        </div>
    </header>
  )
}

export default Header