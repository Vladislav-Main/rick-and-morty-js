import React from 'react';
import { NavLink } from 'react-router-dom';

export const Failed = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">404</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Oops... Something went wrong :(</p>
            <footer className="footer">
              <button className="btn btn-outline-light">
                <NavLink to="/" exact className="nav-link">
                  To home page
                </NavLink>
              </button>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
