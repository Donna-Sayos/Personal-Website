import React from "react";
import "./testimonials.css";
import { IoLogoLinkedin } from "react-icons/io5";

import PEER1 from "../../assets/peer1.png";
import PEER2 from "../../assets/peer2.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="top">
        <h3 className="sub4">Feedback From My Peers</h3>
        <h2 className="sub4_">Testimonials</h2>

        <div className="container testimonials_container">
          <article className="testimonial">
            <div className="peer_img">
              <img src={PEER1} alt="Peer one"/>
            </div>
            <div className="name_social">
              <h2>Selina Ng</h2>
              <a href="https://www.linkedin.com/in/sselinang/" target="_blank" rel="noreferrer">
                  <IoLogoLinkedin size={30} color="#0089CC" />
              </a>
            </div>
            <p>
              I had the privilege of working with Donna in the Grace Hopper Program. During our time together, Donna proved herself to be a talented engineer and dependable team member. Donna is a quick learner with a positive attitude that brings joy to those around her. She takes initiative and displays unwavering determination; thus, she will be an exceptional addition to any team.
            </p>
          </article>

          <article className="testimonial">
            <div className="peer_img">
              <img src={PEER2} alt="Peer two"/>
            </div>
            <div className="name_social">
              <h2>Dakota C. Fabro</h2>
              <a href="https://www.linkedin.com/in/dakotafabro/" target="_blank" rel="noreferrer">
                  <IoLogoLinkedin size={30} color="#0089CC" />
              </a>
            </div>
            <p>
              Donna is such a pleasure to work with! She makes work enjoyable by bringing in a playful attitude to her projects. She reminds everyone that programming work can be challenging but why not whistle while we work? Donna is also a great colleague and friend in that she checks in constantly with those she works with and helps build positive working relationships with her colleagues and peers. Loved working with Donna and happy to have her as a fellow engineer!
            </p>
          </article>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;