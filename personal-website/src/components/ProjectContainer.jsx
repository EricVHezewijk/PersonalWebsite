import React from 'react'
import Project from './Project'

function ProjectContainer() {
  return (
    <>
      <h3 className='project-header'>Projects</h3>
      <div className='project-container'>
        <Project />
        <Project />
        <Project />
      </div>
    </>
    
  )
}

export default ProjectContainer
