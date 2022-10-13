import React from 'react';
import  './services.css';
import {RiShieldCheckFill} from 'react-icons/ri';
import Solo from '../../assets/solo.jpeg';

import Team2 from '../../assets/team2.jpeg'
import DED from '../../assets/ded.jpeg';
import SAFE from '../../assets/safe.jpeg';
import BRIDGE from '../../assets/bridge.jpg'
import LONG from '../../assets/long.jpeg';




const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>We Love Our Drivers</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>100+ Brand New Trucks</p>
              
            </li>
            <img className='service__image' src={Team2} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Team Drivers Program</p>
            </li>
            <img className='service__image' src={Solo} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Solo Driver Program</p>
            </li>
            
            
          </ul>
        </article>

        
        {/* 2 box info Column */}
        <article className="service">
          <div className="service__head">
            <h3>Join Our Family!</h3>
          </div>
          <ul className='service__list'> 
          <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Dedicated Line Program</p>
            </li> 
            <img className='service__image' src={DED} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Long Trip Program</p>
            </li>
            <img className='service__image' src={SAFE} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Safe Trip Program</p>
            </li>
          </ul>
        </article>


        {/* 3 box info Column */}
        <article className="service">
          <div className="service__head">
            <h3>Work Plan!</h3>
          </div>
          <ul className='service__list'> 
          <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Doubles Triples</p>
              
            </li>
            
            <img className='service__image' src={BRIDGE} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>24/7 365 Days Road Assist</p>
            </li>
            <img className='service__image' src={LONG} alt="" />
            <li>
              <RiShieldCheckFill className='service__list-icon' />
              <p>Long Time Service Bonus</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
