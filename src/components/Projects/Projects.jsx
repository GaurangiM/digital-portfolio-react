import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { projectsData } from '../../assets/projectsData'
import ProjectCard from '../Projects/ProjectCard'
import './Projects.css'

const Projects = () => {
  return (
    <div className="section-container">
      <Header heading="My Projects"
        details="Have a look at the projects I built during my learning journey!" />
      <div className="project-cards-container">
        {
          projectsData.map((proj => {
            return <ProjectCard projectName={proj.projectName}
              projectDescription={proj.projectDescription}
              imageUrl={proj.imageUrl}
              projectUrl={proj.projectUrl}
              githubRepo={proj.githubRepo} />
          }))
        }
      </div>
      <Footer phrase="Get in touch !"
        toAddress="/contact"
      />
    </div>
  )
}

export default Projects