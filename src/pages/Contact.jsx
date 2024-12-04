import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import emailjs from 'emailjs-com'; 
import '../Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_n95etys'; 
    const templateID = 'template_8ky4wfp'; 
    const userID = 'P9sztlF1sYl1IVR4r'; 

    const emailData = {
      name: formData.name,       // Maps to {{name}} in the template
      email: formData.email,     // Maps to {{email}} in the template
      message: formData.message, // Maps to {{message}} in the template

    };
    
    // Send the email using EmailJS
    emailjs
    .send(serviceID, templateID, emailData, userID)
    .then(() => {
        setStatusMessage('Your message has been sent successfully! Feel free to checkout my GitHub | Linked In | Resume Below, Thank You');
        setFormData({ name: '', email: '', message: '' });
      })
    .catch(() => {
        setStatusMessage('Something went wrong. Please try again after refreshing the page.');

      });

  };

  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <br />
      <hr />
      <br />
      <a href="/" id="Home-Page">
        <img 
          src="https://cdn3.emoji.gg/emojis/45625-vinylrecord.gif" 
          width="64px" 
          height="64px" 
          alt="VinylRecord" 
        />
      </a>
      <Tooltip 
        anchorSelect="#Home-Page" 
        content="Home Page" 
      />
    </div>
  );
};

export default Contact;
