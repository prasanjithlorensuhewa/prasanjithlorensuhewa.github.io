import React from 'react';
import Typewriter from "typewriter-effect";
import Footer from '../Components/Footer';
import About from './About';
import Contact from './Contact';
import './Home.css';
import Projects from './Projects';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import Achievements from './Achievements';

const Home = () => {
  return (
    <section>
      <div className='home-container'>
        <div className="main-content">
          <h4 style={{ paddingBottom: 10 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h4>
          <h1 className="heading-name">
            I'M
            <strong className="main-name"> Prasanjith <span style={{marginLeft:80}}> Lorensuhewa</span></strong>
          </h1>

          <div className='typewritter'>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Final Year Student",
                  "Professional Chess Player"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            /></div>
            <p>I'm currently a final year computer science and engineering undergraduate at the University of Moratuwa.</p>
            
            <div className='social'>
            
      <a href='https://www.facebook.com/prasanjith.lorensuhewa.3?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-facebook-f'></i>
      </a>
      <a href='https://github.com/prasanjithlorensuhewa' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github'></i>
      </a>
      <a href='https://www.linkedin.com/in/prasanjith-lorensuhewa/' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin-in'></i>
      </a>
      <a href='https://wa.me/94701597950' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-whatsapp'></i>
      </a>
    </div>

    <div className='main-btn'>
      <Link to={'/contact'} className='btn'>Hire Me</Link>
      <a 
              href='https://drive.google.com/file/d/1uzLnROq5IcqN97RABCFg53-Z64DUb8mi/view?usp=sharing' 
              className='btn btn2'
              download
              target='_blank'
              rel='noopener noreferrer'
            >
              Download CV
            </a>

    

            </div>
          </div> 
          <div className='home-img'> 
        <img src={`${process.env.PUBLIC_URL}/images/1.jpg`}/>
      </div>
    </div>

    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Achievements/>
    <Contact/>
    <Footer/>
    </section>
    
  )
}

export default Home;



















