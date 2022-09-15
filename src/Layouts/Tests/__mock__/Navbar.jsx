import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../../Assets/styles/navbar.css";

const Navbar = () => (
  <BrowserRouter>
    <header>
      <nav>
        <h4 className="navbar-logo">Math Magicians</h4>
        <ul className="nav">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/calculator"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Calculator
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="quote"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
);

export default Navbar;
