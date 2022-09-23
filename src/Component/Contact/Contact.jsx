import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1 className='title'><span class="material-symbols-outlined ">mail</span>Contact</h1>
      <div className='form'>
        <form action="">
          <div className="box">
            <div className='top-row'>
              <input type="text" placeholder='Full Name' required/>
              <input type="text" placeholder='Email' required/>
            </div>
            <input className='address' type="text" placeholder='Address' required/>
            <input className='text' type="text" placeholder='Type Something....' required/>

            <div className='send'>
              <button><span class="material-symbols-outlined">
send
</span>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact