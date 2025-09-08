import React from 'react'
import Project from './Project'

function ProjectContainer() {
  return (
    <div className="project-wrapper">
      <h2 className='project-header'>Projects - </h2>
      <div className='project-container'>
        <Project  project='euchre' 
                  title='Web Based Euchre Card Game' 
                  points={['Created a web-based version of the popular card game Euchre using React for the frontend and Node.js with Express for the backend.',
                          'Built RESTful API endpoints to manage game state, player actions, and real-time updates.',
                          'Currently implementing multiplayer functionality using WebSockets to allow players to join and play games in real-time.'
                  ]}
                  link='https://github.com/EricVHezewijk/Euchre'
        />

        <Project  project='movie-browser' 
                  title='Movie Browser' 
                  points={[
                      'Built a movie browser website with React.js where users can search for popular movies, save their favorites, and organize them in a custom grid layout.', 
                      'Managed state to handle search queries, API calls, and keep track of users\' favorite movies.', 
                      'Kept the codebase organized and secure by using Git and GitHub for version control, making it easy to experiment without breaking anything.'
                    ]}
                  link='https://movie-finder-project.netlify.app/'
        />

        

        <Project  project='temp-monitor' 
                  title='Temperature Monitoring System' 
                  points={[
                    'Developed a temperature monitoring system using Python and a Rasberry Pi microcontroller to track real-time status tracking of environments like industrial refrigeration systems.',
                    'Designed a responsive web interface using HTML, CSS, and JavaScript to display temperature readings through a user friendly dashboard.',
                    'Implemented a RestFul API for real-time data communication between the microcontroller and the web interface.'
                  ]}
        />
      </div>
    </div> 
    
  )
}

export default ProjectContainer
