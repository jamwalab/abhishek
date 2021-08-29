import React from 'react';

const Nav = function(props) {

  const {
    pageSelected,
    setPageSelected
  } = props;

  return(
    <header className="flex-row space-between px-2">
      <h1>
        <a href='/' className='px-2'>Abhishek Jamwal</a>
      </h1>
      
      <nav>
        <ul className="flex-row">
          <li>
            <a href='#home' className='px-2' onClick={() => setPageSelected("Home")}>Home</a>
          </li>
          <li>
            <a href='#portfolio' className='px-2' onClick={() => setPageSelected("Portfolio")}>Portfolio</a>
          </li>
          <li>
            <a href='#contact' className='px-2' onClick={() => setPageSelected("Contact")}>Contact</a>
          </li>
          <li>
            <a href='#resume' className='px-2' onClick={() => setPageSelected("Resume")}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;