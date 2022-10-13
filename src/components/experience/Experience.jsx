import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';
import COLUMBUS from '../../assets/COLUMBUS .png'



const Experience = () => {
  return (
    <section id='experience'>
        
          <h2 className='experience__text'>Columbus Cargo Experience</h2>
          
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Columbus Cargo Services</h3>
            
                <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>24/7 Samsara</h4>
                  </div>
                </article>

                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>24/7 Customer Support</h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>24/7 Fleet Services</h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>24/7 Safety Service</h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>24/7 Dispatch Services</h4>
                  </div>
                </article>
    
              </div>
              <img className='about__us-image'  src={COLUMBUS} alt="" />
              
            </div>
            
           <div className="experience__backend">
           <h3>Great Offers for Drivers</h3>
           
              <div className="experience__content">
              
              <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>On Time Payment</h4>
                  
                  </div>
                </article>

                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>Long Milage Bonus</h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>Bring Driver Bonus</h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>No Deposit </h4>
                  
                  </div>
                </article>
                
                <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                  <h4>Be Come Our Family Member</h4>
                  
                  </div>
                </article>
              </div> 
              <img className='about__us-image'  src={COLUMBUS} alt="" /> 
          </div>
        </div>
    </section>
  )
}

export default Experience
