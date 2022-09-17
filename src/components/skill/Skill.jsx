import React from "react";
import "./skill.css";
import { IoCheckmarkDoneCircle, IoCheckmarkCircle } from "react-icons/io5"

const skill = () => {
  return (
    <section id="skill">
      <h5 className="sub2">Skills I Have</h5>
      <h2 className="sub2_">Skills</h2>

      <div className="container skill_container">
        <div className="skill_proficient">
          <h2>Proficient Skills</h2>
          <div className="skill_content">
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Javascript</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>React</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Redux</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Node</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Git</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Github</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Express</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Sequelize</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>PostgreSQL</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>HTML</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>CSS</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>React Native</h3>
            </article>
            <article className="skill_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Expo</h3>
            </article>
            <article className="skill_details">
                  <IoCheckmarkDoneCircle className="check_icon" size={25}/>
                  <h3>RESTful APIs</h3>
              </article>
          </div>
        </div>

        <div className="skill_familiar">
          <h2>Familiar</h2>
            <div className="skill_content">
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Firebase</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Phaser.io</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Cronjob</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Heroku</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Stripe</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Puppeteer</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Nightmare</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Nodemailer</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Emailjs</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Webpack</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Jasmine</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Mocha</h3>
              </article>
              <article className="skill_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Chai</h3>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
};

export default skill;