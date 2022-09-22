import React from 'react'
import './Service.css'
function Service() {
  return (
    <div className='service'>
        <h1 className='title'><span class="material-symbols-outlined ">design_services</span>Services</h1>
        <div className='content'>
          <p>As a base language, I am focusing on <b> MERN Stack Web development </b>. On my learning path, I acquired skills in <b> HTML, CSS/SCSS, JavaScript, ReactJS, NodeJs,and Git </b>. Following these basic subjects, I made a good understanding of other dependent frameworks and libraries
             like <b> Axios, Handlebars, JQuery, Bootstrap, Rest API</b>and also database knowledge in <b> MongoDB & Firebase</b>.</p>
        </div>
        <div className='service-images'>
          <a href="mailto:richardshaju66@gmail.com.com?subject=Need a Static website&body=Hello Richard"> <div className="static" style={{textAlign:'center'}}>
                <img src={require('./static-website.png')} alt="" />
                <h2 className='caption'>Static Websites</h2>
          </div></a>
          <a href="mailto:richardshaju66@gmail.com.com?subject=Need a Web Application&body=Hello Richard"><div className="webapp" style={{textAlign:'center'}}>
              <img src={require('./webapp.png')} alt="" />
              <h2 className='caption'>Web Applications</h2>
          </div></a>
        </div>
    </div>
  )
}

export default Service