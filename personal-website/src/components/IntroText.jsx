import React from 'react'

function IntroText() {

  function openResume() {
    window.open('/Resume.png', '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="intro-container">
      <div className='intro-text-container'>
        <h4>HEY THERE👋, I'M</h4>
        <h1>Eric</h1>
        <h3 className='software-engineer-txt'>Software Engineering Student</h3>
        <h4>@ University of Victoria</h4>
        <p>
          I love all things programming related, but am particularily drawn towards web development and machine learning! Currently exploring co-op opportunities to collaborate with others and contribute to impactful real-world projects!
        </p>
        <button className='resume-btn' onClick={openResume}>Resume</button>
      </div>
      <div className="coding-wrapper">
        <div className="coding-container">
          <img src='/coding.png' />
        </div>
      </div>
        
    </div>
    
  )
}

export default IntroText
