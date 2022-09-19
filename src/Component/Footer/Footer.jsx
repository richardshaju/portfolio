import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='name-div'>
        <h1 className='footer-name'>Richard Shaju</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }} >

        <hr style={{ width: '18%' , borderColor: 'red' }} />
      </div>
      <div className='social-media'>
        <a href="https://www.github.com/richardshaju"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/richard-shaju-a5902b244"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/richard_shaju?t=MAsXlb2cJD80mLmmEyUzdw&s=09"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/richard_kuttikkadan"><i className="fab fa-instagram"></i></a>
      </div>
      <div className='copyright'>
        <p>All Right Reserved | Copyright © 1999 Richard Shaju</p>
      </div>
    </div >
  )
}

export default Footer