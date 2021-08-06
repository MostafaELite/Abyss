import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/questions">
                Questions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/answers">
                Answers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
     
    );
  }
}

export default NavBar;
