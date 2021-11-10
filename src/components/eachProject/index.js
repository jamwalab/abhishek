import React from 'react';
import './style.css';

function Projects({allProjects}) {
  //Map the project array and generate project blocks
  return(
    <section className="d-flex">
      {allProjects.map((project) => (
        <article className="img-container" key={project.title}>
          <img
              src={require(`../../assets/images/${project.image}`).default}
              alt={project.title}
              className="projectPrev"
          ></img>
        
          <div className="img-description">
            <div className="img-text">
              <h4>{project.title}</h4>        
              <p>{project.tech}</p>
              <div className="projectLink">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img src={require(`../../assets/icons/GitHu64px.png`).default} alt="github icon" />
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={require(`../../assets/icons/www.png`).default} alt="github icon" />
                </a>
              </div>
            </div>
          </div> 
        </article>
      ))}
    </section>
  );
};

export default Projects;