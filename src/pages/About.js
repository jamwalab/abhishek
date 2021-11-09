import React from 'react';

const About = () => {
  return (
    <section className="aboutMeSection">
      <article>
        <h3>ABOUT ME</h3>
        <p>
          I'm a Full Stack Developer with a Boot Camp certificate in coding from the University of Toronto. I'm passionate about programming and enjoy developing creative solutions to users' problems.
          As a believer in continuous learning, I enjoy learning and experimenting with new technologies. A team player with good communication and problem-solving skills, I am experienced working in an agile environment. Besides programming, I enjoy playing video games, traveling, and photography.
        </p>
      </article>
      <article>
        <h3>SKILLS</h3>
        <div className="skillImages">
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_javascript.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_python.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_react.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_html5.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_css3.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_nodejs.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_django.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_mysql.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_mongodb.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage">
            <img src={require(`../assets/icons/icon_graphql.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
          <div className="eachSkillImage lighten">
            <img src={require(`../assets/icons/icon_aws.svg`).default} alt="JavaScript icon" />
            <span className="iconToolTip">JavaScript</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About