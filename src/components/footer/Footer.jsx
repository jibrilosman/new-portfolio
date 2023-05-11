import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <section className={props.darkMode ? "dark" : ''}>
        <h1>Footer goes here</h1>
    </section>
  )
}

export default Footer