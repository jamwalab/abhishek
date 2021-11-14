import React from 'react';

//Resume section with download to full pdf
const ContactSection = () => {
  return(
    <section className="aboutMeSection">
      <h3>CONTACT</h3>
      <div className="d-flex space-between">
        <article className="contactSectionLeft">

        </article>
        <article className="contactSectionRight">
          <div className="contactDetails">
            <div>
              <img src={require(`../assets/icons/location-pin.svg`).default} alt="mail icon" className="normalIcons"/>
            </div>
            <p>Mississauga, ON, Canada. L5E 2L2</p>
          </div>
          <div className="contactDetails"> 
            <div>
              <img src={require(`../assets/icons/newmail.svg`).default} alt="mail icon" className="normalIcons"/>
            </div>
            <p>jamwalab@live.com</p>
          </div>
          <div className="contactDetails">
            <div>
              <img src={require(`../assets/icons/newlinkedin.svg`).default} alt="linkedin icon" className="normalIcons"/>
            </div>
            <p>www.linkedin.com/in/abhishekj-21</p>
          </div>
          <div className="contactDetails">
            <div>
              <img src={require(`../assets/icons/github.svg`).default} alt="github icon" className="whitenIcons"/>
            </div>
            <p>www.github.com/jamwalab</p>
          </div>
          <div className="contactDetails">
            <div>
              <img src={require(`../assets/icons/newinstagram.svg`).default} alt="instagram icon" className="normalIcons"/>
            </div>
            <p>www.instagram.com/jamwal_abi</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactSection;