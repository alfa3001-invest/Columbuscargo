import React from 'react';
import './Contact.css';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {FaTelegram} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eb582pu', 'template_v1mh09d', form.current, 'D8yHGjYWptJilO7_d')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMailOpen className='contact__option-icon'/>
          <h4>Email</h4>
          <a target="_blank" rel="noopener noreferrer" href="mailto:Columbuscargoinc.trucking@gmail.com" className='btn'>Send Email</a>
        </article>

        <article className="contact__option">
          <FaTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/Ericasafety" className='btn'>Telegram Message</a>
        </article>

        <article className="contact__option">
          <FiPhoneCall className='contact__option-icon'/>
          <h4>Phone Call</h4>
          <a href="tel:3802033550" className='btn'>Call Now</a>
        </article>

        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='first' placeholder='Your First Name' required />
          <input type="text" name='last' placeholder='Your Last Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <input type="phone"  name='phone' placeholder='Your Phone Number' required/>
          <textarea name="message"  rows="7" placeholder='Your Message here...' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact
