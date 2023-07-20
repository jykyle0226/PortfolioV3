import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <div>
          <h1>Min Yong Kim</h1>
          <h3>Software Engineer</h3>
        </div>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="link_to_your_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a href="link_to_your_github_profile" target="_blank" rel="noopener noreferrer">
            Contact me
          </a>
        </li>
      </ul>
      <div>
        <h4>Technologies</h4>
      </div>
    </nav>
  );
};

export default Navbar;
