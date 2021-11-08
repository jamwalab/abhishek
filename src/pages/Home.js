import React from 'react';
import profPic from '../assets/images/prof-pic.jpg';
import GreetingAnimation from '../animations/GreetingAnimation'

//Home Page HTML section
const Home = function() {
  return(
    <section className="d-flex flex-col-direction headline">
      <GreetingAnimation/>
      <p>I am <span className="myName">Abhishek</span></p>
      <p className="gradientHighlight">A Full Stack Developer</p> 
    </section>
  );
};

export default Home;