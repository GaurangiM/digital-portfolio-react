import React from 'react'
import Typewriter from 'typewriter-effect';

import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to my portfolio !</h1>
        <Typewriter options={{
                        strings: ['Full Stack Developer', 'Software Engineer'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000
                    }}
                    className="job-title"
        />
      </header>
    </div>
  )
}

export default Home
