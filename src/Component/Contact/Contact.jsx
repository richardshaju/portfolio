import React, { useState,useEffect,fetchData, useRef } from 'react'
import './Contact.css'
function Contact() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbyoac39u0A-_t5hWYrUW60vl6Ih_Plv7g5vRUOi/exec"

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      console.log("SUCCESSFULLY SUBMITTED")
      alert("Form Submited Successfully")   
      window.location.reload();
    })
      .catch(err => console.log(err))
  }
  return (
    <section className='contact' id='contact'>
      <h1 className='title'><span className="material-symbols-outlined ">mail</span>Contact</h1>
      <div className='form'>
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="box">
            <div className='top-row'>
              <input type="text" placeholder='Full Name' name='name' required />
              <input type="Email" placeholder='Email' name='email' required />
            </div>
            <input className='address' type="text" placeholder='Address' name='address' required/>
            <input className='text' type="text" placeholder='Type Something....' name='message' required />
            <div className='send'>
              <button type="submit"><span className="material-symbols-outlined">send</span>Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact