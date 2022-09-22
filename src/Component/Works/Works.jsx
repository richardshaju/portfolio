import React from 'react'
import './Works.css'
function Works() {
  return (
    <div className='work'>
      <h1 className='title'><span class="material-symbols-outlined ">home_repair_service</span>Works</h1>
      <div className='works-display' >
        <div className='item'>
            <img src={require('./Capture.JPG')} alt="" />
        </div>
        <div className='item'>
            <img src={require('./netflix.JPG')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Works