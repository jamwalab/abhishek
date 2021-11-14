import React from 'react';

//Resume section with download to full pdf
const ContactSection = () => {
  return(
    <section className="aboutMeSection">
      <h3>CONTACT</h3>
      <p className="contactStatement">I am interested in new development opportunities and projects. If I can be of assistance or you require any further information, please do not hesitate to contact me.</p>
      <div className="d-flex space-between">
        <article className="contactSectionLeft">
          <div className="profilePic">
          <img src={require(`../assets/images/prof-pic.jpg`).default} alt="profile pic"/>
          </div>
          <div>
          <a href={require(`../assets/files/AbhishekResume.pdf`).default} rel="noreferrer" download>
            <div className="contactDetails">
              <div>
                <img src={require(`../assets/icons/resume-cv.svg`).default} alt="resume download icon" className="whitenIcons"/>
              </div>
              <p className="myResume">Download My Resume.</p>
            </div>
          </a>
          </div>
        </article>
        <article className="contactSectionRight">
          <div className="contactDetails">
            <div>
              <img src={require(`../assets/icons/location-pin.svg`).default} alt="mail icon" className="normalIcons"/>
            </div>
            <p>Mississauga, ON, Canada.</p>
          </div>
          <a href="mailto:jamwalab@live.com" rel="noreferrer" className="contactDetails">
            <div>
              <img src={require(`../assets/icons/newmail.svg`).default} alt="mail icon" className="normalIcons"/>
            </div>
            <p>jamwalab@live.com</p>
          </a>
          <a href="https://linkedin.com/in/abhishekj-21" target="_blank" rel="noreferrer" className="contactDetails">
            <div>
              <img src={require(`../assets/icons/newlinkedin.svg`).default} alt="linkedin icon" className="normalIcons"/>
            </div>
            <p>www.linkedin.com/in/abhishekj-21</p>
          </a>
          <a href="https://github.com/jamwalab" target="_blank" rel="noreferrer" className="contactDetails">
            <div>
              <img src={require(`../assets/icons/github.svg`).default} alt="github icon" className="whitenIcons"/>
            </div>
            <p>www.github.com/jamwalab</p>
          </a>
          <a href="https://www.instagram.com/jamwal_abi" target="_blank" rel="noreferrer" className="contactDetails">
            <div>
              <img src={require(`../assets/icons/newinstagram.svg`).default} alt="instagram icon" className="normalIcons"/>
            </div>
            <p>www.instagram.com/jamwal_abi</p>
          </a>
        </article>
      </div>
    </section>
  );
};

export default ContactSection;