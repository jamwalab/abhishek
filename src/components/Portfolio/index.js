import React from 'react';
import Projects from '../Projects'

function Portfolio() {
  const allProjects = [
    {
      title: "Smart Fix",
      link: "https://floating-cove-91289.herokuapp.com/",
      tech: "Node, Express, MySQL, HTML, CSS",
      image: "smartFix",
      description: "aaaa"
    },
    {
      title: "ETA Tracker",
      link: "https://floating-cove-91289.herokuapp.com/",
      tech: "Node",
      image: "smartFix",
      description: "aaaa"
    },
    {
      title: "Smart Fix2",
      link: "https://floating-cove-91289.herokuapp.com/",
      tech: "Node,CSS",
      image: "smartFix",
      description: "aaaa"
    },
    {
      title: "Smart Fix3",
      link: "https://floating-cove-91289.herokuapp.com/",
      tech: "HTML, CSS",
      image: "smartFix",
      description: "aaaa"
    }
  ]
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