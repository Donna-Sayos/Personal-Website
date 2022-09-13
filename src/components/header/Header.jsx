import React from "react";
import "./header.css";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/Me.png";
import { FiArrowDownCircle } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1 className="name">Donna Sayos</h1>
        <h2 className="text-light">Software Engineer | Full Stack Web Developer</h2>
        <HeaderButtons />
        <HeaderSocials />

        <div className="me">
          <img className="me_pic" src={Me} alt="me"/>
        </div>

        <a href="#contact" className="scroll_down">
          <FiArrowDownCircle size={30} color="#D17100"/>
        </a>
      </div>
    </header>
  )
};

export default Header;