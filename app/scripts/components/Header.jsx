import React from 'react';
import Nav from 'components/Nav';

const Header = () => (
  <header className="header">
    <a className="logo">
      <span>mmcd</span>
      <small>.io</small>
    </a>
    <Nav></Nav>
  </header>
);

export default Header;
