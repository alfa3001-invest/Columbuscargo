/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './testimonials.css';
import ERICA from '../../assets/sabbb.jpg';
import DIL from '../../assets/dil.jpg';
import KHASAN from '../../assets/Khasan.jpg';
import MIRA from '../../assets/mira.jpg';
import AZAMAT  from '../../assets/Azamat.jpeg'
import SAID from '../../assets/SAID.jpeg';


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: KHASAN,
    name: 'Columbus Cargo Manager',
    review: 'Khasan'
  },
  {
    avatar: AZAMAT,
    name: 'Head of Office Manager',
    review: 'Azamat '
  },
  {
    avatar: SAID,
    name: 'Main Dispatch',
    review: 'Saidislom '
  },
  {
    avatar: DIL,
    name: 'Accounting Department Manager',
    review: 'Dilmurod'
  },
  
  {
    avatar: ERICA,
    name: 'Safety Department Manager',
    review: 'Erica'
  },
  {
    avatar: MIRA,
    name: 'Update Department Manager',
    review: 'Mira '
  },
  
  
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials and Company Employees</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {  
          data.map(({avatar, name, review}, index) => {
            return (
          <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
           </SwiperSlide>
            )
          })
        }  
      </Swiper>
    </section>
  )
}

export default testimonials
