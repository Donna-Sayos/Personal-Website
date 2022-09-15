import React from "react";
import "./experience.css";
import { IoCheckmarkDoneCircle, IoCheckmarkCircle } from "react-icons/io5"

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="sub2">Skills I Have</h5>
      <h2 className="sub2_">Skills</h2>

      <div className="container experience_container">
        <div className="experience_proficient">
          <h2>Proficient Skills</h2>
          <div className="experience_content">
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Javascript</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>React</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Redux</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Node</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Git / Github</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Express</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Sequelize</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>PostgreSQL</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>HTML</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>CSS</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>React Native</h3>
            </article>
            <article className="experience_details">
              <IoCheckmarkDoneCircle className="check_icon" size={25}/>
              <h3>Expo</h3>
            </article>
          </div>
        </div>

        <div className="experience_familiar">
          <h2>Familiar</h2>
            <div className="experience_content">
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Firebase</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>RESTful APIs</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Phaser.io</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Cronjob</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Heroku</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Stripe</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={25}/>
                  <h3>Webpack</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={40}/>
                  <h3>Puppeteer / Nightmare</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={40}/>
                  <h3>Chai / Jasmine / Mocha</h3>
              </article>
              <article className="experience_details">
                  <IoCheckmarkCircle className="check_icon" size={55}/>
                  <h3>Nodemailer / SendGrid / Emailjs</h3>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;