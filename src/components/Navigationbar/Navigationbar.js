import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/episodes" className="fs-3 ubuntu navbar-brand">The Rick & Morty</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
          <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="/home" className="nav-link ">
              Characters
            </NavLink>
            <NavLink to="/location" className="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
