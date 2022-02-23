import React from 'react'
import './about.css'
import Award from '../../img/award.jpg'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">

        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/9186151/pexels-photo-9186151.jpeg" alt="" className="a-img" />
        </div> 
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello World, Am a Fullstack Developer based out of India. 
        </p>
        <p className="a-desc">
          "I love combining the worlds of eye catching and user friendly websites."
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Certified MERN STACK Developer
            </h4>
            {/* <h4 className="a-award-title">
              Certified MERN STACK Developer
            </h4> */}
<p className="a-award-desc">
              I completed MERN STACK Development Certification Course
            </p>
          </div>            
        </div>
      </div>
    </div>
  )
}

export default About