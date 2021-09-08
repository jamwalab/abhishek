import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = function() {
  //return header html with navbar
  return(
    <header className="flex-row space-between px-2 bottom-margin">
      <Link to="/abhishek" className="webTitle">
        <p className='px-1 py-1 textLogo'>AJ</p>
        <p className="titleSquare"></p>
      </Link>
      
      <nav>
        <ul className="flex-row">
          <li><NavLink exact to="/abhishek" className={`mx-2`} activeClassName="navActive">Home</NavLink></li>
          <li><NavLink to="/abhishek/portfolio" className={`mx-2`} activeClassName="navActive">Portfolio</NavLink></li>
          <li><NavLink to="/abhishek/resume" className={`mx-2`} activeClassName="navActive">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;