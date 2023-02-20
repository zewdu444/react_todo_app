import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo left logospace">Todo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
