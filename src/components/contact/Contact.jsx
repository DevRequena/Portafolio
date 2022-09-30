import React from 'react'
import './contact.css'
import {MdOutlineMail} from "react-icons/md"
import {FaWhatsapp} from "react-icons/fa"
import {RiMessengerLine} from "react-icons/ri"

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>devcesarperez@gmail.com</h5>
            <a href="mailto: devcesarperez@gmail.com" target={"_blank"} rel="noreferrer">Send Me a Message</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+58 412 611 9197</h5>
            <a href="https://api.whatsapp.com/send?phone=+584126119197" target={"_blank"} rel="noreferrer">Let's Talk</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>César David P. Requena</h5>
            <a href="http://m.me/Mr.Rquenita" target={"_blank"} rel="noreferrer">Let's Talk</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action="">
          <input type="text" name='' placeholder='You Full Name' required />
          <input type="text" email='' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact