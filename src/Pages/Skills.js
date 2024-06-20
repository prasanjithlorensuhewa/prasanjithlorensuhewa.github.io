import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='center-text'>
        <h2>My <span>Skills</span></h2>
      </div>
      <div className='skill-content'>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/bootstrap.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/css.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/figma.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/git.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/github.png`} />
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/html.png`}/>
        </div>
        <div className='tech-box'>
        <img src={`${process.env.PUBLIC_URL}/images/techstack/js.png`}/>
        </div>
        <div className='tech-box'>
        <img src={`${process.env.PUBLIC_URL}/images/techstack/aws.png`}/>
        </div>
        <div className='tech-box'>
        <img src={`${process.env.PUBLIC_URL}/images/techstack/postman.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/react.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/java.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/linux.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/nodejs.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/postgre.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/prism.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/python.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/gitlab.png`}/>
        </div>
        <div className='tech-box'>
        <img  src={`${process.env.PUBLIC_URL}/images/techstack/vscode.png`}/>
        </div>

      </div>
      
    </div>
  )
}

export default Skills;
