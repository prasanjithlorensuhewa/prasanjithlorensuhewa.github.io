import emailjs from '@emailjs/browser';
import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9aafa2i', 'template_mqqc5iv', form.current, 'qiDDYHh6BamkbRR0_')
      .then(
        () => {
          setMessage('Your message has been sent successfully!');
          setMessageType('success');
          form.current.reset();
        },
        (error) => {
          setMessage('Failed to send the message, please try again.');
          setMessageType('error');
        }
      );
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className='contact-container'>
      <div className='center-text'>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your name' name="user_name" required />
          <input type='email' placeholder='Your email' name="user_email" required />
          <textarea cols="30" rows="10" placeholder='Enter Your Message..' name="message" required></textarea>
          <input type='submit' name='' value="Send Me" className='send-btn' />
        </form>
      </div>

      {message && <p className={`message ${messageType}`}>{message}</p>}
    </div>
  );
};

export default Contact;
