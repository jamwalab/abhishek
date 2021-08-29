import React from 'react';

function Projects({allProjects}) {
  return(
    <section>
      {allProjects.map((project) => (
        <article className="img-container" key={project.title}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a className="img-preview">
            <img
              src={require(`../../assets/images/${project.image}.png`).default}
              alt={project.title}
            ></img>
            <div className="img-text">
              <p>{project.tech}</p>
            </div>
          </a> 
        </article>
      ))}
    </section>
  );
};

export default Projects;