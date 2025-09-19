import React from "react";

function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <h2 className='project-header'>About Me - </h2>
      <div className="interest-container">
        <div className="interest-text automotive">
          <h2 className="interest-title">Automotive</h2>
          <p className="interest-description">
            When I'm not programming, I love working on cars. From a young age, I've been intrigued by the complexity of engines. Over the years, I've spent countless hours working on both the mechanical and visual aspects of my car. One of my biggest projects was removing and rebuilding the engine, which required constant problem-solving and perseverance. On the visual side, vinyl wrapping my car required careful attention to detail, ensuring every measurement, line, and curve was flawless. 
            <br />
            <br />
            I now apply these skills to my programming, hoping to create beautiful, thoughtful software. In fact, I may have never discovered my passion for programming if it weren't for my interest in cars, as that led me into the engineering field in the first place.
          </p>
          <div className="icon-container">
            <div className="engine-icon">
              <img src="engine.png" />
            </div>
            <div className="piston-icon">
              <img src="piston.png" />
            </div>
          </div>
        </div >
        <div className="image-gallery">
          <div className="landscape-img-container">
            <img src="car1.JPEG" />
          </div>
          <div className="portrait-img-container">
            <img src="car2.JPG" />
            <img src="car3.JPG" />
          </div>
        </div>
      </div>

      <div className="interest-container">
        <div className="image-gallery">

          <div className="portrait-img-container">
            <img src="5050_Peak.JPG" />
            <img src="nature3.JPG" />
          </div>
          <div className="landscape-img-container">
            <img src="JDF_Trail.JPG" />
          </div>
        </div>
        <div className="interest-text nature">
          <h2 className="interest-title">Outdoor Ventures</h2>
          <p className="interest-description">
            Growing up on Vancouver Island has given me an incredible opportunity to immerse myself in the stunning environment that surrounds me. From a young age, I developed a great appreciation for the beautiful landscapes and ecosystems that surround me. I'm passionate about a variety of outdoor activities, including camping, hiking, trail running, and swimming in the chilly lakes and oceans that BC is known for. Some of my most recent ventures this past summer include summiting the 5040 Peak and hiking the coastal Juan de Fuca Trail!
            <br/>
            <br/>
            While I'm fortunate to live in a province filled with endless outdoor adventures, I also have a strong desire to travel and discover new cultures around the world. Some of my bucket list locations are Switzerland (especially the Alps), Italy, Southeast Asia and Japan.
          </p>
          <div className="icon-container">
            <div className="mountain-icon">
              <img src="mountain.png" />
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default AboutMe;
