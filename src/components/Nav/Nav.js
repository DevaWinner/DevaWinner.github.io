import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="flex">
    <NavLink
      to="/"
    >
      <header>
        <h1 className="nav-heading">DevWinner.</h1>
      </header>
    </NavLink>
    <ul className="nav-ul flex">
      <li>
        <NavLink
          to="/"
        >
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;