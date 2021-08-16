import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../img/icon.png';

import './NavBar.css';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p>
            <img src={icon} alt="icon" width="50" height="50" />
          </p>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/episodes" exact className="nav-link">
                  Episodes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/locations" exact className="nav-link">
                  Locations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/watchList" exact className="nav-link">
                  My Watch List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
