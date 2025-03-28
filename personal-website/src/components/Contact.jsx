import React from 'react'

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className='contact-header'>Get in touch</h2>
        <div className="location-container">
            <i class="fa-solid fa-location-dot"></i>
            <h4>Victoria, BC</h4>
        </div>
        <div className="contact-icons-container">
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="github">
            <i class="fa-brands fa-github"></i>
          </div>
          <div className="linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
