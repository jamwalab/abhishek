import React from 'react';
import Projects from '../components/Projects'

function Portfolio() {
  //List of projects to be displayed
  const allProjects = [
    {
      title: "Smart Fix",
      link: "https://floating-cove-91289.herokuapp.com/",
      github: "https://github.com/groupsixzerotwo/smart-fix",
      tech: "Node, Express, Handlebars, API, MySQL, HTML, CSS",
      image: "smartFix.png",
      description: "•	A website that helps customers connect with service providers for household repairs and maintenance."
    },
    {
      title: "ETA Tracker",
      link: "https://hidden-cliffs-50551.herokuapp.com/",
      github: "https://github.com/jamwalab/checkEta",
      tech: "Node, Express, Handlebars, API, Axios, HTML, CSS",
      image: "etaTracker.png",
      description: "•	Helps provide an estimated time of arrival for shipments arriving at the port and moving on the rail in bulk."
    },
    {
      title: "Calorie Tracker",
      link: "https://uot-project-grp.github.io/project01-calorie-tracker/",
      github: "https://github.com/uot-project-grp/project01-calorie-tracker",
      tech: "HTML / CSS / JS / JQuery",
      image: "CalTracker.png",
      description: "•	Allows users to set calorie targets, track daily calorie consumption, and track consumption with tables and graphs."
    },
    {
      title: "The Tech Blog",
      link: "https://pure-eyrie-01841.herokuapp.com/",
      github: "https://github.com/jamwalab/theTechBlog",
      tech: "Node, Express, Handlebars, API, MySQL, HTML, CSS",
      image: "theTechBlog.png",
      description: "•	Allows users to register, create blog posts and add comments on blogs posted by other users."
    },
    {
      title: "Budget Tracker",
      link: "https://limitless-caverns-12620.herokuapp.com/",
      github: "https://github.com/jamwalab/budgetTracker",
      tech: "Node, Express, Mongoose, PWA, HTML, CSS",
      image: "budgetTracker.png",
      description: "•	A progressive web application that works offline, can be installed, and help the user track their budget."
    }
  ]
  //Portfolio page html structure
  return(
    <div>
      <h2 className="title-spaceSetter">Portfolio</h2>
      <Projects
        allProjects={allProjects}
      ></Projects>
    </div>  
  );
};

export default Portfolio;