import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom'

import './NavBar.css'

const NavBar = (props)=> {
  //console.log(props.location)

    const homeClass = (props.location.pathname === '/') ? 'active-item' : '' 
    const aboutClass = (props.location.pathname === '/about') ? 'active-item' : ''
    const skillsClass = (props.location.pathname === '/skills') ? 'active-item' : ''
    const projectsClass = (props.location.pathname === '/projects') ? 'active-item' : ''
    const contactClass = (props.location.pathname === '/contact') ? 'active-item' : ''
 
  
  return (
    <Menu>
        <Link to="/" className={`menu-item ${homeClass}` }>Home</Link>
        <Link to="/about" className={`menu-item ${aboutClass}` }>About Me</Link>
        <Link to="/projects" className={`menu-item ${projectsClass}` }>Projects</Link>
        <Link to="/skills" className={`menu-item ${skillsClass}` }>Skills</Link>
        <Link to="/contact" className={`menu-item ${contactClass}` }>Contact</Link>
      </Menu>
  )
}

export default withRouter(NavBar)