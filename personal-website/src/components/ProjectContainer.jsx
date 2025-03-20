import React from 'react'
import Project from './Project'

function ProjectContainer() {
  return (
    <div className="project-wrapper">
      <h2 className='project-header'>Projects - </h2>
      <div className='project-container'>
        <Project  project='movie-browser' 
                  title='Movie Browser' 
                  points={[
                      'Built a movie browser website with React.js where users can search for popular movies, save their favorites, and organize them in a custom grid layout.', 
                      'Managed state to handle search queries, API calls, and keep track of users\' favorite movies.', 
                      'Kept the codebase organized and secure by using Git and GitHub for version control, making it easy to experiment without breaking anything.'
                    ]}
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
    </div> 
    
  )
}

export default ProjectContainer
