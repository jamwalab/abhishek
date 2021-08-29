import React from 'react';
import profPic from '../../assets/images/prof-pic.jpg'

const Home = function() {
  return(
    <section>
      <article className="flex-row space-between intro-section">
        <div className="px-2">
          <img src={profPic} className='aboutMeProfPic' alt='Profile'></img>
        </div>
        <h2 className="px-5">Hello, my name is Abhishek. I am a Full Stack Developer living in Mississauga, ON.</h2>
      </article>
      
      <h2 className="title-spaceSetter">About Me</h2>
      <p>Experienced in front-end and back-end design, database management and creating automated solutions. Completed Full Stack Web Development certificate from University of Toronto.</p>
      <p>Developed skills in Node.js, Express, React, Handlebars, SQL, API, PWA, OOP, HTML and CSS, by designing and develop meaningful and complex applications. A team player with good communication and problem-solving skills. Passionate about programming, with strong ability to design, build and maintain websites from ideation to production. An eager learner, with seven years of experience working in Supply Chain Industry.</p>
    </section>
  );
};

export default Home;