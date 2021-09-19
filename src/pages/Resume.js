import React from 'react';

//Resume section with download to full pdf
function Resume() {
  return(
    <section>
      <article  className="title-spaceSetter">
        <a href={require(`../assets/files/AbhishekResume.pdf`).default} className="downloadResume" download><button>Download Full Resume</button></a>
      </article>
      <article className="skills">
        <h4 className="title-spaceSetter bottomBorder-underline">Technical Skills</h4>
        <p>Programming Languages - JavaScript ES6+, Python, Visual Basic Application (VBA), HTML5/CSS3</p>
        <p>Web Frameworks - JQuery, React, Node, Express, Handlebars, Bootstrap</p>
        <p>Cloud Technologies	- AWS EC2, AWS S3, AWS RDS, AWS LAMBDA, AWS SQS/SNS</p>
        <p>Programming Concepts - Data Structures, OOP, Design Patterns, PWA, DOM</p>
        <p>Web Technologies - GraphQL, REST, JSON, AJAX, XML</p>
        <p>Databases - MySql (SQL), MongoDB (NoSQL)</p>
      </article>
      <article className="education">
        <h4 className="title-spaceSetter bottomBorder-underline">Education and certifications</h4>
        <div>
          <h5>University of Toronto (April 2021 - September 2021)</h5>
          <h6>Bootcamp Certificate – Full Stack Web Development</h6>
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
            <li>Designed VBA macros to automatically track shipments for customs release and update custom clearance status.</li>
            <li>Built VBA macros to verify data entries with Canadian customs daily to meet customer requirements.</li>
            <li>Developed tools helped in reducing the shipment tracking by half, allowing bulk search of containers with ETA tracker.</li>
          </ul>
        </div>
        <div>
          <h5>APL Logistics (July 2016 – June 2018)</h5>
          <h6>Senior Analyst – Global Trade Compliance</h6>
          <ul>
            <li>Developed and maintained trade complaints databases for multiple countries using MySQL, XML, and Excel.</li>
            <li>Built VBA macros from multiple databases for ETL and analytics, reducing 80% time for compiling reports.</li>
            <li>Worked in an Agile scrum development cycle to assist with designing and testing the trade compliance website.</li>
          </ul>
        </div>
        <div>
          <h5>Molex (August 2015 – June 2016)</h5>
          <h6>Analyst – Trade and Customs</h6>
          <ul>
            <li>Maintained products HS code database on SAP system for various countries.</li>
          </ul>
        </div>
        <div>
          <h5>Aptean (February 2014 – August 2015)</h5>
          <h6>Analyst – Global Trade Content</h6>
          <ul>
            <li>Designed backend process to capture trade compliance data from customs websites of different countries.</li>
            <li>Maintained Global Trade Management (TradeBeam) database.</li>
            <li>Worked in a peer-reviewed development cycle and performed code testing.</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Resume;