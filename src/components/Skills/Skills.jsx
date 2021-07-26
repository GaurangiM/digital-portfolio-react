import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import skillsVector from './../../assets/skills_vector.png';
import { skillList } from '../../assets/skillsData'
import SkillCard from './SkillCard'
import './Skills.css'

const Skills = () => {
  return (
    <div className="section-container">
      <Header heading="My Skills"
        details="I am always on a journey of learning new skills, here are the skills I have learnt so far !" />

      <div className="skill-card-container">
        {
          skillList.map(skill => {
            return <SkillCard skillName={skill.skillName}
              skillUrl={skill.skillUrl} />
          })
        }
      </div>

      <Footer phrase="Get in touch !"
        toAddress="/contact" />
      <div className='skills-vector-frame'>
        <img
          src={skillsVector}
          alt='skills'
          className='skills-vector'
        />
      </div>
    </div>
  )
}

export default Skills