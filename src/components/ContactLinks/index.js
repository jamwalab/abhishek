import React from 'react';
import "./style.css"

//Footer HTML
function ContactLinks() {
  return(
    <section className="d-flex flex-col-direction contactSection">
      <div className="d-flex flex-row contactLinks">
        <div>
          <a href="mailto:jamwalab@live.com" rel="noreferrer">
            <img src={require(`../../assets/icons/newmail.svg`).default} alt="mail icon" className="normalIcons"/>
            <span className="iconToolTip">Email</span>
          </a>
          
        </div>
        <div> 
          <a href="https://github.com/jamwalab" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/github.svg`).default} alt="github icon" className="whitenIcons"/>
            <span className="iconToolTip">GitHub</span>
          </a>

        </div> 
        <div>
          <a href="https://linkedin.com/in/abhishekj-21" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/newlinkedin.svg`).default} alt="linkedin icon" className="normalIcons"/>
            <span className="iconToolTip">LinkedIn</span>
          </a>
          
        </div>

        <div> 
          <a href={require(`../../assets/files/AbhishekResume.pdf`).default} rel="noreferrer" download>
            <img src={require(`../../assets/icons/resume-cv.svg`).default} alt="resume download icon" className="whitenIcons"/>
            <span className="iconToolTip">Resume</span>
          </a>
        </div>
        <div> 
          <a href="https://www.instagram.com/jamwal_abi" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/newinstagram.svg`).default} alt="instagram icon" className="normalIcons"/>
            <span className="iconToolTip">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLinks;