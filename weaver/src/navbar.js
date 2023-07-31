import React from 'react';
import './App.css'; 

function Navbar({ logo }) {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <img src={logo} className="navbar-logo" alt="logo" />
      </div>
      <a className="navbar-link" href="/">
        Home
      </a>
      <a className="navbar-link" href="/search">
        Search
      </a>
      
    </nav>
  );
}

export default Navbar;