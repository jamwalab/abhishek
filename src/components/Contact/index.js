import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // isValid conditional statement
      if(!isValid) {
        setMessage('Your email is invalid.');
      } else {
        setMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setMessage(`${event.target.name} is required.`);
      } else {
        setMessage('');
      }
    }

    console.log('message', message);

    if (!message) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };


  async function handleSubmit (event) {
    event.preventDefault();
    if (!message) {
      console.log(formState);
      event.target.reset();
    } else {
      console.log('message', message);
    }
  };

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