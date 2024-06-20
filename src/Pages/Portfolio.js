import React from 'react'
import './Portfolio.css';
import { projectDetails } from '../Details';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
        <div className='center-text'>
           <h2>My <span>Projects</span></h2>
        </div>

        <div className='portfolio-content'>
          


           {projectDetails.map((project, index) => (
                <div className='box' key={index}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h6>{project.techstack}</h6>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View Code
                    </a>
                    
                </div>
            ))}


        

       
        </div>
      
    </div>
  )
}

export default Portfolio
