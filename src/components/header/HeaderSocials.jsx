import React from 'react'
import {ImTelegram} from 'react-icons/im';
import {SiFacebook} from 'react-icons/si';
import {FiPhoneCall} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a target="_blank" rel="noopener noreferrer" href="https://facebook.com"><SiFacebook/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/Ericasafety"><ImTelegram/></a>
      <a target="_blank" rel="noopener noreferrer" href="tel:3802033550"><FiPhoneCall/></a>
      
    </div>
  )
}

export default HeaderSocials
