import React from 'react'

import Header from '../Header/Header'
import ContactReplyAnime from '../../assets/contactReply.gif'
import './Contact.css'

const ContactReply = ()=> {
  return (
    <div className="section-container">
      <Header heading="Thank you !" 
              details="Hey, thank you for reaching out ! I will contact you as soon as possible."/>
      <div className="contact-reply">
        <img src={ContactReplyAnime} alt="reply to mail" className="contact-reply-anime"/>
      </div>
    </div>

  )
}

export default ContactReply