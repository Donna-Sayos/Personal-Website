import React from "react";
import "./portfolio.css";
import HangOut from "../../assets/HangOut.png"
import RTR from "../../assets/RTR.png"
import PT from "../../assets/PT.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="top">
        <h3 className="sub3">My Recent Work</h3>
        <h2 className="sub3_">Portfolio</h2> 
      </div>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="item_img">
            <img src={HangOut} alt="HangOut App"/>
          </div>
          <h3>HangOut Mobile App</h3>
          <h4>
            A social app connecting users through events and activities. A social app that connects users by centering community connection through events and activities that are close to both users; Users can choose how they want to use the app (romance, friendship, solo).
          </h4>
          <h5>
            React Native Expo | Firebase (Firestore, Auth, Storage) | CSS | Redux | APIs (react-native-deck-swiper, react-native-gifted-chat, expo-image-picker, react-native-maps, react-native-google-places-autocomplete, datetimepicker)
          </h5>          
          <div className="portfolio_btn">
            <a href="https://github.com/team-fireballs-gh/team-fireballs-capstone-shredda.git" className="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.youtube.com/watch?v=SVDFDJWC3bA&list=PLx0iOsdUOUmnLN8sDLqSgVBNZmFq7Rx4k&index=6" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="item_img">
            <img src={RTR} alt="Ready-To-Roomba App"/>
          </div>
          <h3>Ready To Roomba</h3>
          <h4>
            Are you ready to Roomba? Are you ready to change your life? Your life will be dust-free and crust-free. Pick up a Roomba today! A mock e-commerce site where users can browse a selection of robotic vacuums, add to their cart, and checkout their selected products.
          </h4>
          <h5>
            Node.js | HTML5 | CSS | React | Redux | Express | PostgreSQL | Bootstrap | Stripe | Heroku
          </h5>
          <div className="portfolio_btn">
            <a href="https://github.com/Team-Wall-E/Ready-To-Roomba.git" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="item_img">
            <img src={PT} alt="Price Tracker"/>
          </div>
          <h3>Price Tracker</h3>
          <h4>
            A program that watch for price changes by periodically scraping product pricings on eCommerce sites and extracts the changes. Get real-time change alerts on pricing. Once the price goes below your target price, an email will be sent to you.
          </h4>
          <h5>
            Node.js | Cronjob | Nightmare | Puppeteer | Nodemailer | Web Scraping
          </h5>
          <div className="portfolio_btn">
            <a href="https://github.com/Donna-Sayos/Price-Tracker.git" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;