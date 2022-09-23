import React from 'react'
import './Works.css'
function Works() {
  return (
    <div className='work' id='works'>
      <h1 className='title'><span class="material-symbols-outlined ">home_repair_service</span>Works</h1>
      <div className='content'>
        <p>Following are my previous works : </p>
      </div>
      <div className='works-display' >

        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./Capture.JPG')} alt="" />

          <div class="item-title cart">
            <span>Shopping Website</span>
            <a class="link-icon" href="https://maxcart.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>

          <p style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>Html,Css,Javascript</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b> </p>
        </div>
        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./netflix.JPG')} alt="" />

          <div class="item-title netflix">
            <span>Netflix-Clone</span>
            <a class="link-icon" href="https://richardshaju.github.io/netflix/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-external-link" aria-hidden="true" ></i>
            </a>
          </div>

          <p style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>React,Css,Javascript</b> <br />Back-end : <b>Nill</b> <br />API used : <b>TMDB</b> <br />FrameWorks : <b>ReactJS</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Works