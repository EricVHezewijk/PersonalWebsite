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
                  points={[
                    'Built a stock prediction model using Python, NumPy, pandas, and scikit-learn to analyze historical market data and forecast daily price movements.',
                    'I pulled real-time stock data with the yfinance library, cleaned and preprocessed it to filter out noise, and experimented with different feature sets to improve accuracy.',
                    'Trained and fine-tuned the model using an 80/20 train-test split, evaluating performance with precision scoring.'
                  ]}
        />

        <Project  project='temp-monitor' 
                  title='Temperature Monitoring System' 
                  description='IoT-based temperature monitoring system, designed with Pico W microcontroller controlled by Python and relayed to a web based UI.'
                  points={[
                    'Designed an IoT-based temperature monitoring system using Python and a Raspberry Pi Pico W to track real-time temperatures.',
                    'Built a responsive web dashboard with HTML, CSS, and JavaScript, making it easy to monitor temperature changes remotely.',
                    'Implemented a RESTful API for data communication between the microcontroller and the web interface, allowing for real-time updates and alerts.',
                    'This project was a fun mix of hardware and software, combining my interest in embedded systems with web development to create a practical, user-friendly solution.'
                  ]}
        />
      </div>
    </div> 
    
  )
}

export default ProjectContainer
