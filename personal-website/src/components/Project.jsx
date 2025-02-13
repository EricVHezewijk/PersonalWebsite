import React from 'react'
import { useState, useEffect } from 'react';

function Project({project, title, description, points, link}) {

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
      <button onClick={openProjectLink}>
        <i className="fa-brands fa-github"></i>
      </button>
      <p>{description}</p>
      <ul>
        {points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Project
