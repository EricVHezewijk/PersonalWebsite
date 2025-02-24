import React from "react";

function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <h2 className='project-header'>About Me - </h2>
      <div className="interest-container">
        <div className="interest-text">
          <h2 className="interest-title">Automotive</h2>
          <p className="interest-description">From the moment I first played with a Hot Wheels car as a child, my fascination with the automotive world began. I was captivated by the complexity of engines and the precise engineering that goes into creating such a machine. In high school, I purchased my first car and dedicated countless hours to understanding how each component worked. This passion quickly turned into hands-on experience, and I began to tackle more complex projects, like removing and rebuilding the entire engine myself. I also took on the challenge of using vinyl wrap to give my car an entirely new look. Not only did these projects teach me some great problem solving skills, but also saved me a significant amount of money on shop fees, making it even more rewarding.

          </p>
        </div >
        <div className="image-gallery">
          <div className="landscape-img-container">
            <img src="car1.JPEG" />
          </div>
          <div className="portrait-img-container">
            <img src="car2.jpeg" />
            <img src="car3.jpeg" />
          </div>
        </div>
      </div>

      <div className="interest-container">
        <div className="image-gallery">

          <div className="portrait-img-container">
            <img src="car2.jpeg" />
            <img src="car3.jpeg" />
          </div>
          <div className="landscape-img-container">
            <img src="nature1.JPG" />
          </div>
        </div>
        <div className="interest-text">
          <h2 className="interest-title">Nature</h2>
          <p className="interest-description">Phasellus hendrerit dui sed nunc dapibus, eu tincidunt tortor suscipit. Integer id ipsum vitae nisi tempor iaculis.</p>
        </div>

      </div>

      <div className="interest-container">
        <div className="interest-text">
          <h2 className="interest-title">Exercise</h2>
          <p className="interest-description">Sed dictum urna sit amet dui fermentum, a cursus ligula tristique. Nullam feugiat nunc ut leo suscipit, a malesuada enim tincidunt.</p>
        </div>
        <div className="image-gallery">
          <img src="exercise1.jpg" />
          <img src="exercise2.jpg" />
          <img src="exercise3.jpg" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
