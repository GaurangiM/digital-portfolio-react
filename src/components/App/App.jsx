import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar'

import './App.css'

const App = ()=> {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} exact/>
      </BrowserRouter>
    </div>
  )
}

export default App