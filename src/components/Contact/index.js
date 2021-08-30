import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // isValid conditional statement
      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    console.log('errorMessage', errorMessage);

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };


  async function handleSubmit (event) {
    event.preventDefault();
    if (!errorMessage) {
      console.log(formState);
    } else {
      console.log('errorMessage', errorMessage);
    }
  };

  return(
    <section>
      <h2 className="title-spaceSetter">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" >Submit</button>
      </form>
    </section>  
  );
};

export default Contact;