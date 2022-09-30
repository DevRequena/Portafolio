import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> 1 Year Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>

            <article className='about_card'>
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small> 5+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque rerum accusamus suscipit facere error minima ex nemo dolor veritatis? Reprehenderit qui quisquam consectetur voluptates temporibus ducimus vel debitis quos odio?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About