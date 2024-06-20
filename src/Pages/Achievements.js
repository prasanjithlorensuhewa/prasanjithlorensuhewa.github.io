import React from 'react'
import './Achievements.css';

const Achievements = () => {
  return (
    <div className='achievements-container'>
        <div className='center-text'>
           <h2>My <span>Achievements</span></h2>
        </div>
        <div class="content">
        <div class="card reveal">
          <div class="card-img">
          <img  src={`${process.env.PUBLIC_URL}/images/achievements/1.jpeg`}/>
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
          <img  src={`${process.env.PUBLIC_URL}/images/achievements/2.jpeg`}/>
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
          <img  src={`${process.env.PUBLIC_URL}/images/achievements/3.jpg`}/>
          </div>
        </div>
        <div class="card reveal">
          <div class="card-img">
          <img  src={`${process.env.PUBLIC_URL}/images/achievements/4.jpg
          `}/>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Achievements
