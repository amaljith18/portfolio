import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image.png'
import resume from '../../assets/Amaljith_Resume_2024.pdf.pdf'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_image} alt="" />
      <h1><span>I'm AMALJITH,</span> frontend developer from India</h1>
      <p>Innovative Front-End Developer from Kerala, India, with 3 years of expertise crafting seamless, responsive, and engaging web experiences. </p>
      <div className="hero-action">
      <a 
          href="https://www.linkedin.com/in/amaljith-pm-45a5431b8/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-connect"
        >
          Connect With LinkedIn
        </a>
        <a href={resume} download="Amaljith_Resume.pdf" className="hero-resume" >My Resume</a>
      </div>
    </div>
  )
}

export default Hero
