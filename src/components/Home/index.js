import React from 'react';
import profPic from '../../assets/images/prof-pic.jpg'

const Home = function() {
  return(
    <section>
      <article className="flex-row space-between no-flex-wrap">
        <div className="px-2">
          <img src={profPic} className='aboutMeProfPic'></img>
        </div>
        <h2 className="px-5 text-justify">Hello, my name is Abhishek. I am a Full Stack Developer living in Mississauga, ON.</h2>
      </article>
      
      <h2>About Me</h2>
      <p className="text-justify">Full stack web developer with strong skills in JavaScript. I have a degree in Bachelor of Science - Electronics and Telecommunication Engineering, certificate for AWS cloud practitioner and currently pursuing an intensive Full Stack Web Development certificate from University of Toronto.</p>
      <p className="text-justify">I have honed my skills in Node.js, Express, React, SQL, HTML and CSS by developing meaningful and complex applications. I am a team player with good communication and problem-solving skills, demonstrated throughout my bootcamp, where I worked with the team to develop complex back-end designs, helped team members if they got stuck and took the initiative to resolve conflicts during code merge. With a passion for programming and as an eager learner, I am excited to use my technical skills and collaborative nature to help your team to continue to develop innovative projects</p>
    </section>
  );
};

export default Home;