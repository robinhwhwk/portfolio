import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css'; 

const EmailForm = (props) => {
  const form = useRef();
  let message;

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current)

    emailjs.sendForm('service_c5vb0i8', 'template_f8ntk1v', form.current, 'Nd5CypkQjwL6PXcOP')
      .then((result) => {
          console.log(result.text);
          message = formData.get("message")
          console.log(message);
          const c = `from: ${formData.get('from_name')} message: ${message}`;
          props.onSubmit({command: c, nextId: "message_sent"});
          // 
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="from_name" placeholder='From (email)*' required/>
      <label>Message</label>
      <textarea className='message' name="message" placeholder='Message*' required/>
      <input type="submit" value="Send" style={{cursor: 'pointer'}}/>
    </form>
  );
};

export default EmailForm;