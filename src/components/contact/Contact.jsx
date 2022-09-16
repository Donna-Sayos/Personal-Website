import React from "react";
import "./contact.css"; 
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <div className="top">
        <h3 className="sub5">Get In Touch</h3>
        <h2 className="sub5_">Contact Me. Don't be shy 😊</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail size={25} color="#D1D1D1" />
            <h2>Email</h2>
            <h4>donnasayos@gmail.com</h4>
            <a href="mailto:donnasayos@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <FiPhoneCall size={30} color="#BABABA" />
            <h2>Phonecall</h2>
            <h4>(929) 256 - 8198</h4>
            <a href="tel:+19292568198" target="_blank" rel="noreferrer">Call Me</a>
          </article>
        </div>

        {/* message form */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={12} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;