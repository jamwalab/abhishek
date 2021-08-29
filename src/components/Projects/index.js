import React from 'react';

function Projects({allProjects}) {
  return(
    <section>
      {allProjects.map((project) => (
        <article className="img-container" key={project.title}>
          <h3>{project.title}</h3>
          <a className="img-preview">
            <img
              src={require(`../../assets/images/${project.image}.png`).default}
              alt={project.title}
            ></img>
            <div className="img-text">
              <p>{project.tech}</p>
            </div>
          </a> 
          <p>{project.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Projects;