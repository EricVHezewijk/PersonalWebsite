import React from "react";

function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <h2 className="project-header">About Me - </h2>
      <div className="about-me-text">
        Outside of programming, I enjoy spending time working on my car, getting
        physical excercise and enjoying the beautiful views my city has to offer.
      </div>
      <div className="interests-container">
        <div className="interest">
          <h3>Cars</h3>
          <div className="interest-img-container">
            <img src="/car.JPEG" />
          </div>
        </div>
        <div className="interest">
          <h3>Sports</h3>
          <div className="interest-img-container">
            <img src="/soccer.png" />
          </div>
        
        </div>
        <div className="interest">
          <h3>Nature</h3>
          <div className="interest-img-container">
            <img src="/soccer.png" />
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default AboutMe;
