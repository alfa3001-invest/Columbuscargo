import React from 'react';
import "./portfolio.css";
import SAFETY from '../../assets/1.png';
import DIS from '../../assets/2.png';
import FUEL from '../../assets/3.png';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Columbus cargo And Samsara Guide</h2>
  
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SAFETY} alt="" />
          </div>
          <h3>Columbus Cargo Inc</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.samsara.com/guides/truck-driver-safety-tips/"className='btn btn-primary' target='__blank'>Road Safety</a>
          <a href="tel:3802033550" className='btn'>Call Us Now</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DIS} alt="" />
          </div>
          <h3>Columbus Cargo Inc</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.samsara.com/guides/freight-dispatcher/" className='btn btn-primary' target='__blank'>Dispatch Support</a>
          <a href="tel:3517770777" className='btn'>Call Us Now</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FUEL} alt="" />
          </div>
          <h3>Columbus Cargo Inc</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.samsara.com/guides/fuel-card-for-truckers/" className='btn btn-primary' target='__blank'>Fuel Card Guide</a>
          <a href="tel:5016157777" className='btn'>Call Us Now</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio


