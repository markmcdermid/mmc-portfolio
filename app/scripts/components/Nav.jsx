import React from 'react';
import Github from 'react-icons/lib/io/social-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Email from 'react-icons/lib/io/email';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__ul">
      <li className="nav__li">
        <a className="nav__a" href="#">
          <span className="nav__text">github</span>
          <Github className="nav__icon"/>
        </a>
      </li>
      <li className="nav__li">
        <a className="nav__a" href="#">
          <span className="nav__text">linkedin</span>
          <LinkedIn className="nav__icon"/>
        </a>
      </li>
      <li className="nav__li">
        <a className="nav__a" href="#">
          <span className="nav__text">email</span>
          <Email className="nav__icon"/>
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
