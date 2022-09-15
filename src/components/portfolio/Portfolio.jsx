import React from "react";
import "./portfolio.css";
import { PROJECTS } from "./projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio_top">
        <h3 className="sub3">My Recent Work</h3>
        <h2 className="sub3_">Portfolio</h2> 
      </div>

      <div className="container portfolio_container">
        {
          PROJECTS.map(({ id, image, title, description, skills, github, demo }) => (
            <article key={id} className="portfolio_item">
              <div className="item_img">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <h5>{skills}</h5>          
              <div className="portfolio_btn">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
};

export default Portfolio;