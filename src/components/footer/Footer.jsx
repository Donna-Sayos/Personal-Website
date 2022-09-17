import React from "react";
import "./footer.css";
import { MdEmail, MdCopyright } from "react-icons/md";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="name_container">
        <a href="/#" className="name">Donna Sayos</a>
      </div>
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skill">Skills</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="mailto:donnasayos@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail size={40} color="white" className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/dsayos/" target="_blank" rel="noreferrer">
          <IoLogoLinkedin size={40} color="#0089CC" className="icon"/>
        </a>
        <a href="https://github.com/Donna-Sayos" target="_blank" rel="noreferrer">
          <IoLogoGithub size={40} color="#202700" className="icon"/>
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          <MdCopyright/> ET 2022. All rights reserved.
        </small>
      </div>
    </footer>
  )
};

export default Footer;