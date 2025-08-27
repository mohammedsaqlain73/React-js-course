import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with an API or email service here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>📍 Our Location</h3>
          <p>123 Foodie Street, Bhubaneswar, Odisha</p>

          <h3>📞 Call Us</h3>
          <p>+91 98765 43210</p>

          <h3>📧 Email</h3>
          <p>support@foodexpress.com</p>

          <h3>🗺️ Find Us</h3>
          <div className="map-placeholder">
            {/* Replace with actual map embed */}
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
