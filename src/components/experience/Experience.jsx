import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience_container">
        <div className="experience_frontend">
          <h3 className='frontendText'>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <AiOutlineCheckCircle  className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineCheckCircle className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediated</small>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineCheckCircle className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediated</small>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineCheckCircle className='experience_details-icon'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediated</small>
              </div>
            </article>
            <article className='experience_details'>
              <AiOutlineCheckCircle className='experience_details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Intermediated</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
