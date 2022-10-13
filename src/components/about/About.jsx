import React from "react";
import "./about.css";
import Mat from "../../assets/mat.jpeg";
import { FaAward } from "react-icons/fa";
import { SiUps } from "react-icons/si";
import { FaUsps } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";
import { FaFedex } from "react-icons/fa";
import { FaDhl } from "react-icons/fa";
import DILMUROD2 from '../../assets/dilmurod.jpg';
import PITER from '../../assets/PITERBILT.jpg';
 

const About = () => {
  return (
    <section id='about'>
      <h2 className="about__h22">About Us</h2>
      <h2>Our Family Members Are Always In Control </h2>
      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={PITER} alt="About__Image" />
            
          </div>
          
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <FaAward className="about__icon" />
              
              <h5>7+ Years Experience</h5>
            </article>
            <article className="about__card">
              <SiUps className="about__icon" />
              <h2>UPS</h2>
            </article>

            <article className="about__card">
              <GrAmazon className="about__icon" />
              <h2>Amazon</h2>
            </article>

            <article className="about__card">
              <FaUsps className="about__icon" />
              <h2>USPS</h2>
            </article>

            <article className="about__card">
              <FaFedex className="about__icon" />
              <h2>FedEx</h2>
            </article>

            <article className="about__card">
              <FaDhl className="about__icon" />
              <h2>DHL</h2>
            </article>
          </div>
          <div className="banner__us">
            <div className="banner__card">
              <h2>Columbus Cargo Inc</h2>
              <div>
                
                <img className='about__service-image' src={DILMUROD2} alt="" />
                <p></p>
                <img className='about__service-image' src={Mat} alt="" />
                <h5>
                  Since 2015 <h2>"Columbus Cargo Inc"</h2> has provided quality
                  services to clients by providing them with the professional
                  care they deserve. Get in touch today.
                </h5>
              </div>
            </div>
          </div>

          <p>
            As an organization, we are committed to serving our customers with
            unrivaled high-quality service and safety in the trucking industry.
            Our customers define us with the standard they require and our
            number one priority is their satisfaction. So our customers come
            first, and their opinions matter. We strive towards achieving
            excellence with our services. To provide these services to our
            external customers, our internal quality processes is at an optimum.
            Our operational qualities are built to achieve efficiency. Every
            employee must understand how their job contributes to the overall
            operation and directly influences the customers, who ultimately have
            the control knob. Columbus Cargo. is committed to evolving in all
            departments with customer needs.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
