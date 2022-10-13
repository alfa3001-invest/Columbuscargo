import React from 'react';
import './footer.css';
import {SiFacebook} from 'react-icons/si';
import {ImTelegram} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
import COLU from '../../assets/COLUMBUS .png';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Columbus Cargo Inc <img className='Logo' src={COLU} alt="Logo" /></a>
        

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="footer__socials">
      <a target="_blank" rel="noopener noreferrer" href="https://facebook.com"><SiFacebook/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/Ericasafety"><ImTelegram/></a>
      <a target="_blank" rel="noopener noreferrer" href="tel:3802033550"><FiPhoneCall/></a>
      </div>
      <div className='footer__kh'>
        <small>Developed by Akmalov.Kh &copy;</small>
      </div>
    </footer>
  )
}

export default Footer
