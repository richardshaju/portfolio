import React from 'react'
import './About.css'
function About() {
  return (

    <div className='about'>
      <h1 className='title'>About</h1>
      <div className='content'>
        <p>I'm a Self-Taught  <span style={{ color: 'red' }}>MERN Stack Developer</span> , highly self-motivated and passionate about learning new things. Moreover, I'm a Tech enthusiast. <br />
          <br /> My dream is to make web apps which converts complex works into simple and  thereby to save the precious time. <br />
          <br />I believe that people should do things in which they are good at or in which their heart lays. That’s why I chose freelance web development as my career because I believe I’m good at this and mas I am always honest and I am never afraid of doing hard work.</p>
      </div>
      <div className='tools'>
        <h3 style={{paddingLeft:'10rem',fontSize: '1.4rem'}}>Languages and Tools</h3>
        <div className='icons'>
          <i className="fab fa-html5" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
          <i className="fab fa-html5" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
          <i className="fab fa-html5" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
          <i className="fab fa-html5" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
          <i className="fab fa-html5" aria-hidden="true"></i>
          <i className="fab fa-css3" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default About