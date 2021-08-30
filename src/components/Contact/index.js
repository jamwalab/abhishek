import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  //useState to track contact form input
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  //useState to track error messages
  const [message, setMessage] = useState('');

  //function to track change in contact form. (onBlur and onChange)
  function handleChange(event) {
    //When input selected is email
    if (event.target.name === 'email') {
      //check email validity
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // isValid conditional statement and set message
      if(!isValid) {
        setMessage('Your email is invalid.');
      } else {
        setMessage('');
      }
    } else {
      //If form is left blank
      if (!event.target.value.length) {
        setMessage(`${event.target.name} is required.`);
      } else {
        setMessage('');
      }
    }
    //Console log error message
    console.log('Message: ', message);

    if (!message) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  //Function to handle submit request
  function handleSubmit (event) {
    event.preventDefault();
    if (!message) {
      //Console logs the input
      console.log(formState);
      //Resets the form
      event.target.reset();
    } else {
      console.log('Message: ', message);
    }
  };
  //Contact html
  return(
    <section>
      <h2 className="title-spaceSetter">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" onChange={handleChange} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onChange={handleChange} onBlur={handleChange}/>
        </div>
        {message && (
          <div>
            <p className="error-text">{message}</p>
          </div>
        )}
        <button type="submit" >Submit</button>
      </form>
    </section>  
  );
};

export default Contact;