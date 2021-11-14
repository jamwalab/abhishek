import React from 'react';
import GreetingAnimation from '../animations/GreetingAnimation'

import ContactLinks from '../components/ContactLinks';

//Home Page HTML section
const Home = function() {
  return(
    <>
      <section className="d-flex flex-col-direction headline">
        
        <p><GreetingAnimation/><span className="gradientHighlight">, I'm </span><span className="myName">Abhishek Jamwal</span>.</p>
        <p className="gradientHighlight">I'm a Full Stack Developer.</p> 
      </section>
      <ContactLinks/>
    </>
  );
};

export default Home;