import React from "react";
import "./about.css";
import Me from "../../assets/hot.png";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5 className="sub1">Get To Know</h5>
      <h2 className="sub1_">About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt="About Pic"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" size={40} color="#69660E"/>
              <h2>Industry Experience</h2>
              <h3>1 year</h3>
            </article>

            <article className="about_card">
              <TbCertificate className="about_icon" size={40} color="#69660E"/>
              <h2>Software Engineer Certificate</h2>
              <h3>553 hours of Full-stack Web Development</h3>
            </article>
          </div>

          <p>
            I was born and raised in the Philippines. I am a full-stack web developer currently based in New York. I am a versatile, empathetic, organized, and driven striving to break into the tech industry. I have a curious mind. Always keen and ready to learn new things. The desire to learn culminated into my attendance in a Software Engineering Immersive Bootcamp called the Grace Hopper Program at Full Stack Academy. 
          </p>

          <a href="#contact" className="button btn btn-primary">Let's Talk</a>
        </div> 
      </div>
    </section>
  )
};

export default About;