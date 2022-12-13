import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
    var today = new Date();
    const navigate = useNavigate()
    var yyyy = today.getFullYear();
    

   
  return (
    <div className='footer'>
      <div className='name-div'>
        <h1 className='footer-name'>Richard Shaju</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }} >

        <hr style={{ width: '18%', borderColor: 'red' }} />
      </div>
      <div className='social-media'>
        <a href="https://www.github.com/richardshaju"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/richard-shaju-a5902b244"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/richard_shaju?t=MAsXlb2cJD80mLmmEyUzdw&s=09"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/richard_kuttikkadan"><i className="fab fa-instagram"></i></a>
      </div>
      <div className='copyright'>
       
        <p> <span href="" onClick={() => {navigate('/license') }}>All Right Reserved</span> | Copyright © {yyyy} Richard Shaju</p>
      </div>
    </div >
  )
}

export default Footer