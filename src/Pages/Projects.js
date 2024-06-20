import React from 'react'
import './Projects.css';
import { projectDetails } from '../ProjectDetails';

const Projects = () => {
  return (
    <div className='projects-container'>
        <div className='center-text'>
           <h2>My <span>Projects</span></h2>
        </div>

        <div className='projects-content'>
          


           {projectDetails.map((project, index) => (
                <div className='box' key={index}>
                    <img src={project.image} alt={project.title} />
                    <h4>{project.title}</h4>
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

export default Projects
