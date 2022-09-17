import React from "react";
import "./header.css";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/Me.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_top">
          <h2 className="greet">Hello I'm</h2>
          <h1 className="name">Donna Sayos</h1>
          <h2 className="text-light">Software Engineer | Full Stack Web Developer</h2>

          <HeaderButtons />

          <div className="me">
            <img className="me_pic" src={Me} alt="me"/>
          </div>
        </div>
        <HeaderSocials />
      </div>
    </header>
  )
};

export default Header;