import React from 'react';
import "./style.css"

//Footer HTML
function Footer() {
  return(
    <footer>
      <section className="d-flex flex-row contactLinks">
        <div>
          <a href="mailto:jamwalab@live.com" rel="noreferrer">
            <img src={require(`../../assets/icons/mail.svg`).default} alt="mail icon" />
            <span className="iconToolTip">Email</span>
          </a>
          
        </div>
        <div>
          <a href="https://linkedin.com/in/abhishekj-21" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/linkedin.svg`).default} alt="linkedin icon" />
            <span className="iconToolTip">LinkedIn</span>
          </a>
          
        </div>
        <div> 
          <a href="https://github.com/jamwalab" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/github.svg`).default} alt="github icon" />
            <span className="iconToolTip">GitHub</span>
          </a>

        </div> 
        <div> 
          <a href="https://www.instagram.com/jamwal_abi" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/instagram.svg`).default} alt="instagram icon" />
            <span className="iconToolTip">Instagram</span>
          </a>
        </div>
        <div> 
          <a href={require(`../../assets/files/AbhishekResume.pdf`).default} rel="noreferrer" download>
            <img src={require(`../../assets/icons/resume-cv.svg`).default} alt="resime download icon" />
            <span className="iconToolTip">Resume</span>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;