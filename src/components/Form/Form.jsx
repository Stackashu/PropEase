import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = ({setContactTray}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const form = useRef(null)
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)

    const templateParams = {
      from_name: formData.name.trim(),
      to_name: 'Ashutosh Mallick', // You can customize this or make it dynamic
      message_html: formData.message.trim(),
      reply_to: formData.email.trim(),
      phoneNum: formData.number.trim(),
    };

    emailjs.send(
      'service_x8x7mqc',
      'template_663tv3d',
      templateParams,
      'E_HW1z3eJSREPvXTr'
    )
    .then((result) => {
      console.log('Success:', result.text);
      alert("Message sent successfully!"); // here ihave to toastify
      setFormData({ name: '', email: '', number: '', message: '' });
    }, (error) => {
      console.error('Error:', error.text);
      alert("Failed to send message.");
    });
    setContactTray(false);
  };

  return (
    <div className="form-container">
      <div> 
        <h2>Contact Us</h2>
        <svg  onClick={()=>setContactTray(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="4" x2="20" y2="20" stroke="black" />
          <line x1="20" y1="4" x2="4" y2="20" stroke="black" />
       </svg>

      </div>
     
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label htmlFor="number">Phone Number</label>
        <input 
          type="tel" 
          id="number" 
          name="number"
          value={formData.number}
          onChange={handleChange}
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
