import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo left logospace">Todo</a>
          <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
