import React from 'react'
import './portafolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"

function Portafolio() {
  return (
      <section id='portafolio'>
        <h5>My Recent Work</h5>
        <h2>Portafolio</h2>

        <div className="container portafolio_container">
          <article className='portafolio_item'>
            <div className="portafolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portafolio Item Title</h3>
            <div className="portafolio_item-cta">
              <a href="https://github.com" className='btn'>GitHub</a>
              <a href="https://notinerd.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portafolio_item'>
            <div className="portafolio_item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>This is a portafolio Item Title</h3>
            <div className="portafolio_item-cta">
              <a href="https://github.com" className='btn'>GitHub</a>
              <a href="https://notinerd.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portafolio_item'>
            <div className="portafolio_item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>This is a portafolio Item Title</h3>
            <div className="portafolio_item-cta">
              <a href="https://github.com" className='btn'>GitHub</a>
              <a href="https://notinerd.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portafolio_item'>
            <div className="portafolio_item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>This is a portafolio Item Title</h3>
            <div className="portafolio_item-cta">
              <a href="https://github.com" className='btn'>GitHub</a>
              <a href="https://notinerd.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portafolio_item'>
            <div className="portafolio_item-image">
              <img src={IMG5} alt="" />
            </div>
            <h3>This is a portafolio Item Title</h3>
            <div className="portafolio_item-cta">
              <a href="https://github.com" className='btn'>GitHub</a>
              <a href="https://notinerd.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>

        </div>
      </section>
  )
}

export default Portafolio