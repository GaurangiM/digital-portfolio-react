import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import aboutImg from '../../assets/about-me.gif'
import './About.css'

const About = () => {
  return (
    <div className="section-container">
      <Header heading="About me"
        details="Hello all, this is Gaurangi Mane, welcome to my portfolio website!" />
      <div className="about-main">
        <div className="about-main-left">

          <img src={aboutImg} alt="about me" className="about-vector" />

        </div>
        <div className="about-main-right">
          <p>I am a Full Stack Developer looking for Junior level Full Stack/Front End Developer opportunities. I have worked as a Software Tester and now I have reskilled myself as a Full Stack Developer since I have been always passionate about web development.</p>
          <p>I am constantly upgrading my knowledge learning the latest technologies, I am passionate about front-end technologies and have been following my passion through different online courses. Recently, I graduated from an intensive 12-weeks long Full stack developer bootcamp from Codaisseur. You can have a look at projects I built in projects section.</p>
          <p>I am a quick learner and I always take efforts in upgrading my technology stack. I am a creative, fun, passionate coder who likes to tackle challenges and aims for quality and perfection in my work.</p>
          <p>I am looking forward to opportunities to engage in some amazing and creative projects in Front End Development !</p>
        </div>
      </div>
      <Footer phrase="Check out my projects !"
        toAddress="/projects"
      />

    </div>
  )
}

export default About