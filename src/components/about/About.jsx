import React from "react";
import "./about.css";
import Me from "../../assets/hot.png";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5 className="sub">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt="About Pic"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" size={30} color="#69660E"/>
              <h3>Industry Experience</h3>
              <small>1 year</small>
            </article>

            <article className="about_card">
              <TbCertificate className="about_icon" size={30} color="#69660E"/>
              <h3>Software Engineer Certificate</h3>
              <small>553 hours of Full-stack Web Development</small>
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