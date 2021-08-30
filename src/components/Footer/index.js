import React from 'react';

function Footer() {
  return(
    <footer>
      <section className="flex-row contactLinks">
        <div>
          <a href="mailto:jamwalab@live.com" rel="noreferrer">
            <img src={require(`../../assets/icons/mail.svg`).default} alt="mail icon" />
          </a>
        </div>
        <div> 
          <a href="https://github.com/jamwalab" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/github.svg`).default} alt="github icon" />
          </a>
        </div>
        <div>
          <a href="www.linkedin.com/in/abhishekj-21" target="_blank" rel="noreferrer">
            <img src={require(`../../assets/icons/linkedin.svg`).default} alt="linkedin icon" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;