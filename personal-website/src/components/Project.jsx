import React from 'react'

function Project({className, title}) {
  return (
    <div className={`project ${className}`}>
      <h3>{title}</h3>
    </div>
  )
}

export default Project
