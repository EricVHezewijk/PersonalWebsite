import React from 'react'
import Project from './Project'

function ProjectContainer() {
  return (
    <>
      <h2 className='project-header'>Projects - </h2>
      <div className='project-container'>
        <Project  project='movie-browser' 
                  title='Movie Browser' 
                  description='Created a movie browing website in React, allowing users to browse, search and favourite movies that are fetched from a RESTful API.'
                  points={['blah', 'blah', 'blah']}
                  link='https://movie-finder-project.netlify.app/'
        />

        <Project  project='stock-predictor' 
                  title='Machine Learning Stock Predictor' 
                  description='Machine learning web app to predict daily stock price movement using pands, numpy and scikit-learn to clean and analyze data.'
                  points={[]}
        />

        <Project  project='temp-monitor' 
                  title='Temperature Monitoring System' 
                  description='IoT-based temperature monitoring system, designed with Pico W microcontroller controlled by Python and relayed to a web based UI.'
                  points={[]}
        />
      </div> 
    </>
    
  )
}

export default ProjectContainer
