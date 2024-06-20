import React from 'react'
import './Experience.css';
import { experienceDetails } from '../ExperienceDetails';

const Experience = () => {
  return (
    <div className='experience-container'>
        <div className='center-text'>
           <h2>My <span>Experience</span></h2>
        </div>
        <div className='experience-content'>
           {experienceDetails.map((experience, index) => (
                <div className='box' key={index}>
                    <img src={experience.image} alt={experience.title} />
                    <h4>{experience.title}</h4>
                    <h5>{experience.subtitle}</h5>
                    <p>{experience.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
