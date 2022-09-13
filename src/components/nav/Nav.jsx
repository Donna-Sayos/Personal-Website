import React from "react";
import "./nav.css";
import { useState } from "react";

import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { BiBookBookmark, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaRegUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookBookmark/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail/></a>
    </nav>
  )
};

export default Nav; 