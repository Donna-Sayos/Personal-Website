import React from "react";
import "./testimonials.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FEEDBACKS } from "./feedbacks";

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="top">
        <h3 className="sub4">Feedback From My Peers</h3>
        <h2 className="sub4_">Testimonials</h2>
      </div>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          FEEDBACKS.map(({ image, name, link, feedback }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_img">
                <img src={image} alt="Peer one"/>
              </div>
              <div className="name_social">
                <h2>{name}</h2>
                <a href={link} target="_blank" rel="noreferrer">
                    <IoLogoLinkedin size={30} color="#0089CC" className="icon"/>
                </a>
              </div>
              <p>{feedback}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>     
    </section>
  )
};

export default Testimonials;