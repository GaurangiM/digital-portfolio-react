import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import contactAnime from '../../assets/contact-anime.gif'
import github from '../../assets/gh.png'
import linkedin from '../../assets/li.png'
import instagram from '../../assets/in.png'
import ContactReply from '../Contact/ContactReply'
import './Contact.css'

const Contact = ()=> {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [state, handleSubmit] = useForm("xoqyngvz");
  if (state.succeeded) {
      return <ContactReply />;
  }
  return (
    <div className="section-container">
      <Header heading="Get in touch"
        details="Hey, you have something interesting for me or just want to connect, send me an email!" />
      <div className="contact-main">
        <div className="contact-main-left">
          <img src={contactAnime} alt="contact me" className="contact-vector" />
        </div>
        <div className="contact-main-right">
          <div className="contact-form-container">
            <form className="contact-form"
                  onSubmit={handleSubmit}
                >
              <input type="email"
                      placeholder="Your email address"
                      name="email"
                      className="input-box email-input"
                      />
              <textarea type="text"
                        placeholder="Your message"
                        className="input-box body-input"
                        name="message" 
                        value={message}
                        onChange={(e)=> {
                          setMessage(e.target.value)
                        }}/>
              <button type="submit" className="contact-btn"
                      disabled={state.submitting}>Contact me</button>
            </form>
          </div>
        </div>
      </div>
      <div className="social-icons-container">
        <a href="https://github.com/GaurangiM" className="social-icon">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/gaurangim/" className="social-icon">
          <img src={linkedin} alt="linkedin icon"  />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram icon" className="social-icon"/>
        </a>
      </div>
      <Footer phrase="Check out my projects !"
        toAddress="/projects"
      />
    </div>
  )
}

export default Contact