import React from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Music App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Songs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/songs/add">
                Add Song
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistics">
                Statistics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
