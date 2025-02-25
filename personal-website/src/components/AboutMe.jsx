import React from "react";

function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <h2 className='project-header'>My Interests - </h2>
      <div className="interest-container">
        <div className="interest-text automotive">
          <h2 className="interest-title">Automotive</h2>
          <p className="interest-description">
            {/* From the moment I stepped into my first autoshop class, my fascination with the automotive world began. I was captivated by the complexity of engines and the precise engineering that goes into creating such a machine. In high school, I purchased my first car and dedicated countless hours to understanding how each component worked. This passion quickly turned into hands-on experience, and I began to tackle more complex projects, like removing and rebuilding the entire engine myself. I also took on the challenge of using vinyl wrap to give my car an entirely new look. Not only did these projects teach me some great problem solving skills, but also saved me a significant amount of money on shop fees, making it even more rewarding. */}
            When I’m not programming, I love working on cars. From a young age, I’ve been captivated by the complexity of engines. Over the years, I’ve spent countless hours improving both the mechanical and visual aspects of my car. One of my biggest projects was removing and rebuilding the engine, which taught me problem-solving and perseverance through every challenge. On the visual side, vinyl wrapping my car required incredible attention to detail, ensuring every line and curve was flawless. 
            <br />
            <br />
            Both projects helped me develop key skills—problem-solving with the engine and precision with the wrap—that I now apply to programming. It was through my passion for cars that I first discovered my love for engineering, which eventually led me to programming after writing my first line of code.
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
        <div className="icon-container">
          <div className="engine-icon">
            <img src="engine.png" />
          </div>
          <div className="piston-icon">
            <img src="piston.png" />
          </div>
        </div>
        
      </div>

      <div className="interest-container">
        <div className="image-gallery">

          <div className="portrait-img-container">
            <img src="nature2.jpg" />
            <img src="nature3.JPG" />
          </div>
          <div className="landscape-img-container">
            <img src="nature1.jpg" />
          </div>
        </div>
        <div className="interest-text nature">
          <h2 className="interest-title">Nature</h2>
          <p className="interest-description">Growing up on Vancouver Island has given me an incredible opportunity to immerse myself in the stunning natural environment that surrounds me. From my early elementary school field trips, I developed a deep appreciation for the breathtaking landscapes and vibrant ecosystems of this beautiful part of the world. I’m passionate about a variety of outdoor activities, including camping, hiking, trail running, and swimming in the pristine lakes and oceans that BC is known for. While I’m fortunate to live in a province filled with endless outdoor adventures, I also have a strong love for traveling and discovering new corners of the world. Every new destination offers a fresh perspective on nature, and I relish the opportunity to connect with the natural beauty of different places.

          </p>
        </div>
        <div className="icon-container">
          <div className="tree-icon">
            <img src="tree.png" />
          </div>
          <div className="mountain-icon">
            <img src="mountain.png" />
          </div>
        </div>

      </div>

      <div className="interest-container">
        <div className="interest-text excercise">
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
