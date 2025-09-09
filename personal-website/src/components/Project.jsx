import React from 'react'
import { useState, useEffect } from 'react';

function Project({project, title, points, link}) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      setLoaded(true);
    },[]
  )

  function openProjectLink() {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={`project ${project} ${loaded ? 'show' : ''}`}>
      <h3>{title}</h3>
      {link && 
      <button onClick={openProjectLink}>
        <i className="fa-brands fa-github"></i>
      </button>
    }
      <ul>
        {points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Project
