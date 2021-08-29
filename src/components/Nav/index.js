import React from 'react';

const Nav = function() {
  return(
    <header className="flex-row space-between px-2">
      <h1>Abhishek Jamwal</h1>
      <nav>
        <ul className="flex-row">
          <li>
            <a href='#aboutMe' className='px-2'>About Me</a>
          </li>
          <li>
            <a href='#portfolio' className='px-2'>Portfolio</a>
          </li>
          <li>
            <a href='#contactMe' className='px-2'>Contact Me</a>
          </li>
          <li>
            <a href='#resume' className='px-2'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;