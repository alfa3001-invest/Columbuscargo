import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {CgScrollV} from 'react-icons/cg';
import COLUMBUS from '../../assets/COLUMBUS .png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Welcome</h2>
        <h2>Columbus Cargo Inc</h2>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
        <img className='about__us-image' src={COLUMBUS} alt="me" />
        <h2>Columbus Cargo Inc</h2>
        <h3 className="text-light">DOT: 3477679 </h3>
        <h3 className="text-light">MC:  1140296 </h3>
        <h3 className="DOT">Address: 300 North Main  St Ste 400 Middletown Ohio 45042</h3>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <a href="#contact" className='CgScrollV'><CgScrollV/></a>
      </div>
    </header>
  )
}

export default Header