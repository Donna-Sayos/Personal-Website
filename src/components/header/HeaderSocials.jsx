import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/dsayos/" target="_blank" rel="noreferrer">
          <IoLogoLinkedin size={40} color="#0089CC" />
        </a>
        <a href="https://github.com/Donna-Sayos" target="_blank" rel="noreferrer">
          <IoLogoGithub size={40} color="#202700" />
        </a>
    </div>
  )
};

export default HeaderSocials;