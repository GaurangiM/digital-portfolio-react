import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import aboutImg from '../../assets/about-me.gif'
import './About.css'

const About = () => {
  return (
    <div className="section-container">
      <Header heading="About me"
        details="Hello all, welcome to my portfolio website!" />
      <div className="about-main">
        <div className="about-main-left">
      
            <img src={aboutImg} alt="about me" className="about-vector" />
          
        </div>
        <div className="about-main-right">
          <p>Hello all, welcome to my portfolio profile! I am passionate about front-end technologies and have been following my passion through different online courses. Recently, I graduated from an intensive 12-weeks long Full stack developer bootcamp from Codaisseur. You can have a look at projects I built over here.</p>
        </div>
      </div>
      <Footer phrase="Check out my projects !"
        toAddress="/projects"
      />

    </div>
  )
}

export default About