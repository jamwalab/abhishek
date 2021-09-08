import React from 'react';

//Resume section with download to full pdf
function Resume() {
  return(
    <section>
      <article  className="title-spaceSetter">
        <h4><a href={require(`../assets/files/AbhishekResume.pdf`).default} className="downloadResume" download>Click to download the full resume.</a></h4>
      </article>
      <article className="skills">
        <h4 className="title-spaceSetter bottomBorder-underline">Technical Skills</h4>
        <p>Frontend: HTML5, CSS, jQuery, JavaScript, Bootstrap, Materialize</p>
        <p>Backend:	Node, Express, MySQL, MongoDB, React, Handlebars, API, PWA, OOP</p>
        <p>Others:	Visual Basic Application(VBA), Python (beginner), AWS (beginner)</p>
      </article>
      <article className="education">
        <h4 className="title-spaceSetter bottomBorder-underline">Education and certifications</h4>
        <div>
          <h5>University of Toronto (April 2021 - September 2021)</h5>
          <h6>Certificate – Full Stack Web Development</h6>
        </div>
        <div>
          <h5>Amazon Web Services (AWS) (July 2020)</h5>
          <h6>Certified Cloud Practitioner</h6>
        </div>
        <div>
          <h5>Birla Institute of Management Technology (July 2011 – June 2013)</h5>
          <h6>Post Graduate Diploma in Management (International Business) in Operations</h6>
        </div>
        <div>
          <h5>University of Mumbai (July 2005 – June 2009)</h5>
          <h6>Bachelor of Engineering - Electronics and Telecommunication</h6>
        </div>
      </article>
      <article className="experience">
        <h4 className="title-spaceSetter bottomBorder-underline">Relevant Experience</h4>
        <div>
          <h5>Maersk (September 2018 – Present)</h5>
          <h6>Associate – Customs House Brokerage</h6>
          <ul>
            <li>Reduce the time required to track shipments by allowing containers to be searched in bulk with ETA Tracker.</li>
            <li>Built a VBA macro that checks customs entries to match customer requirements, thus achieving accuracy of over 97%.</li>
            <li>Designed VBA macro that tracks shipments for release and automatically assigns status at various stages of clearance.</li>
          </ul>
        </div>
        <div>
          <h5>APL Logistics (July 2016 – June 2018)</h5>
          <h6>Senior Analyst – Global Trade Compliance</h6>
          <ul>
            <li>Developed and maintained trade compliance database content of multiple countries with MySQL, xml and excel.</li>
            <li>Built a VBA macro that helped reduce the time required to compile data for the database by 80%.</li>
          </ul>
        </div>
        <div>
          <h5>Molex (August 2015 – June 2016)</h5>
          <h6>Analyst – Trade and Customs</h6>
          <ul>
            <li>Maintained HS code database of the products on SAP system for various countries.</li>
          </ul>
        </div>
        <div>
          <h5>Aptean (February 2014 – August 2015)</h5>
          <h6>Analyst – Global Trade Content</h6>
          <ul>
            <li>Design backend process to capture trade compliance data from customs websites of different countries.</li>
            <li>Maintain trade compliance database of multiple countries and test the deployed code before moving it to production.</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Resume;