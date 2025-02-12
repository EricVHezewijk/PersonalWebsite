import React from 'react'

function Project({className, title, description, points}) {
  return (
    <div className={`project ${className}`}>
      <h3>{title}</h3>
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
