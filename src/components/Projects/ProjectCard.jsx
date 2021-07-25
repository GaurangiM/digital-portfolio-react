import React from 'react'

import './Projects.css'

const ProjectCard = ({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
  githubRepo
}) => {
  return (
    <div className="project-card shadow">
      <div className="image-container">
        <a href={projectUrl} className="project-external-link">
          <img src={imageUrl} alt="project" className="project-image" />
        </a>
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <a href={githubRepo} className="project-gh-link">Learn more</a>
      </div>
    </div>
  )
}

export default ProjectCard