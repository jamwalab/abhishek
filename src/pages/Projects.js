import React from 'react';
import Projects from '../components/eachProject'

function Portfolio() {
  //List of projects to be displayed
  const allProjects = [
    {
      title: "Booklyst",
      link: "https://booklyst-project.herokuapp.com/",
      github: "https://github.com/group3uoft/booklyst",
      tech: "React, Node, GraphQL",
      image: "booklyst.png",
      description: "The Application that we have created will help find the books you are searching for across multiple sites so that you can buy your book for the cheapest cost. You can search book using text or voice. An intuitive dashboard to track all your favourite and read books!"
    },
    {
      title: "Smart Fix",
      link: "https://floating-cove-91289.herokuapp.com/",
      github: "https://github.com/groupsixzerotwo/smart-fix",
      tech: "Node, Handlebars, MySQL",
      image: "smartFix.png",
      description: "•	A website that helps customers connect with service providers for household repairs and maintenance."
    },
    {
      title: "ETA Tracker",
      link: "https://hidden-cliffs-50551.herokuapp.com/",
      github: "https://github.com/jamwalab/checkEta",
      tech: "Node, Handlebars, Javascript",
      image: "etaTracker.png",
      description: "•	Helps provide an estimated time of arrival for shipments arriving at the port and moving on the rail in bulk."
    },
    {
      title: "Calorie Tracker",
      link: "https://uot-project-grp.github.io/project01-calorie-tracker/",
      github: "https://github.com/uot-project-grp/project01-calorie-tracker",
      tech: "JQuery, HTML, CSS",
      image: "CalTracker.png",
      description: "•	Allows users to set calorie targets, track daily calorie consumption, and track consumption with tables and graphs."
    },
    {
      title: "The Tech Blog",
      link: "https://pure-eyrie-01841.herokuapp.com/",
      github: "https://github.com/jamwalab/theTechBlog",
      tech: "Node, Handlebars, MySQL",
      image: "theTechBlog.png",
      description: "•	Allows users to register, create blog posts and add comments on blogs posted by other users."
    },
    {
      title: "Budget Tracker",
      link: "https://limitless-caverns-12620.herokuapp.com/",
      github: "https://github.com/jamwalab/budgetTracker",
      tech: "Node, Javascript, MongoDB",
      image: "budgetTracker.png",
      description: "•	A progressive web application that works offline, can be installed, and help the user track their budget."
    }
  ]
  //Portfolio page html structure
  return(
    <section className="aboutMeSection">
      <h3>RECENT WORKS</h3>
      <Projects
        allProjects={allProjects}
      ></Projects>
    </section>  
  );
};

export default Portfolio;