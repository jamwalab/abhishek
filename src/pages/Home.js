import React from 'react';
import profPic from '../assets/images/prof-pic.jpg';
import GreetingAnimation from '../animations/GreetingAnimation'

//Home Page HTML section
const Home = function() {
  return(
    <section className="d-flex flex-col-direction headline">
      
      <p><GreetingAnimation/><span className="gradientHighlight">, I'm </span><span className="myName">Abhishek</span>.</p>
      <p className="gradientHighlight">I'm a full-stack developer.</p> 
    </section>
  );
};

export default Home;