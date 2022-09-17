import React, { useState, useRef } from "react";
import "./contact.css"; 
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    setMessage(true);
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact_top">
        <h3 className="sub5">Get In Touch</h3>
        <h2 className="sub5_">Contact Me. Don't be shy 😊</h2>
        <h2>( Please provide a valid email 👍🏼 )</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail size={30} color="#FFB08F" />
            <h2>Email</h2>
            <h4>donnasayos@gmail.com</h4>
            <a href="mailto:donnasayos@gmail.com" target="_blank" rel="noreferrer" className="btn">Send a message</a>
          </article>
          <article className="contact_option">
            <FiPhoneCall size={30} color="#FFB08F" />
            <h2>Phonecall</h2>
            <h4>1 (929) 256 - 8198</h4>
            <a href="tel:+19292568198" target="_blank" rel="noreferrer" className="btn">Call Me</a>
          </article>
        </div>

        {/* message formRef */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={12} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
          {message && <h2>Thanks, I'll reply as soon as I can 😁</h2>}
        </form>
      </div>
    </section>
  )
};

export default Contact;