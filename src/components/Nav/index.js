import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import siteLogo from '../../assets/icons/siteLogoAJPng.png';
import './style.css';

const Nav = function() {
  //return header html with navbar
  return(
    <header className="d-flex space-between">
      <Link to="/" className="siteLogo">
        <img src={siteLogo} alt="site logo"></img>  
      </Link>
      
      <nav>
        <ul className="d-flex row-direction">
          <li><NavLink exact to="/about" activeClassName="navActive">About</NavLink></li>     
          <li><NavLink to="/projects" activeClassName="navActive">Projects</NavLink></li>
          <li><NavLink to="/contact" activeClassName="navActive">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;