import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> support@shopzone.com</p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Address:</strong> 123 E-Commerce Blvd, Tech City</p>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
