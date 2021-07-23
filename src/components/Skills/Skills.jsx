import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import skillsAnime from '../../assets/skills-anime.gif'
import './Skills.css'

const Skills = ()=> {
  return (
    <div className="section-container">
      <Header heading="My Skills"
              details="I am always on a journey of learning new skills, here are the skills I have learnt so far !"/>
      <Footer phrase="Get in touch !"
              toAddress="/contact"/>
      <div className="skills-vector-frame">
        <img src={skillsAnime} alt="skills anime" className="skills-vector" />
      </div>
    </div>
  )
}

export default Skills