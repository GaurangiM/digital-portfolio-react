import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import skillsAnime from '../../assets/skills-anime.gif'
import { skillList } from '../../assets/skillsData'
import SkillCard from './SkillCard'
import './Skills.css'

const Skills = () => {
  return (
    <div className="section-container">
      <Header heading="My Skills"
        details="I am always on a journey of learning new skills, here are the skills I have learnt so far !" />
      <div className="skills-page-container">
        <div className="skills-vector-frame">
          <img src="https://user-images.githubusercontent.com/32289626/126990642-c10c240b-0a43-42b9-9587-59b703f1fa7b.gif" alt="skills anime" className="skills-vector" />
        </div>
        <div className="skill-card-container">
          {
            skillList.map(skill => {
              return <SkillCard skillName={skill.skillName}
                skillUrl={skill.skillUrl} />
            })
          }
        </div>

      </div>

      <Footer phrase="Get in touch !"
        toAddress="/contact" />

    </div>
  )
}

export default Skills