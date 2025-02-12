import React from 'react'
import Project from './Project'

function ProjectContainer() {
  return (
    <>
      <h2 className='project-header'>Projects - </h2>
      <div className='project-container'>
        <Project className='movie-browser' title='Movie Browser' />
        <Project className='stock-predictor' title='Machine Learning Stock Predictor'/>
        <Project className='temp-monitor' title='Temperature Monitoring System'/>
      </div> 
    </>
    
  )
}

export default ProjectContainer
