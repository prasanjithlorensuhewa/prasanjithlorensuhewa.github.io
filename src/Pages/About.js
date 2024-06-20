import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>

      <div className='image-container'>
        <h1>About <span>Me</span></h1>
      <div className='about-img'> 
        <img src={`${process.env.PUBLIC_URL}/images/1.jpg`}/>
      </div>
      </div>

      <div className='about-text'>
        <div className='exp-area'>
          <p >
          Hi there! My name is Prasanjith, and I'm currently a third year computer science and engineering undergraduate at the University of Moratuwa. I'm incredibly passionate about data science and software engineering areas and I'm excited to see where my career takes me in the industry. !
          Throughout my time at University of Moratuwa, I've had the opportunity to attend numerous hackathons and competitions and also awarded colours at colours night 2023 at university of Moratuwa for the performance at inter university chess championship 2022, Vice captained the SLUG 2023 winning Moratuwa Men’s chess team and a member of the Champion UOM chess team at Inter university chess championship 2022.
          I'm passionate about staying up-to-date with the latest trends and technologies in the industry, and I'm always on the lookout for new opportunities to learn and grow.    
          </p>

        </div>

      </div>
      
    </div>
  )
}

export default About
