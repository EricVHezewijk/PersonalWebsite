import React from 'react'

function Contact() {
  return (
    <div className="contact-wrapper">
      <h2 className='project-header'>Contact Me -</h2>
      <div className="contact-container">
        <div className="contact-links">
          <a href="https://github.com/EricVHezewijk" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ericvanhezewijk/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:ericvanhezewijk7@gmail.com" className="contact-link">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
