import React from "react";
import "./nav.css";
import { useState } from "react";

import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BiBookBookmark, BiMessageDetail, BiHappyBeaming } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaRegUser/></a>
      <a href="#skill" onClick={() => setActiveNav("#skill")} className={activeNav === "#skill" ? "active" : ""}><BiBookBookmark/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><MdWorkOutline/></a>
      <a href="#testimonials" onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><BiHappyBeaming/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail/></a>
    </nav>
  )
};

export default Nav; 