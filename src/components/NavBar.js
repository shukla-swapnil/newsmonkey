import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/general">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  {props.capitalizeFirstLetter("business")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  {props.capitalizeFirstLetter("entertainment")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  {props.capitalizeFirstLetter("health")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  {props.capitalizeFirstLetter("science")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  {props.capitalizeFirstLetter("sports")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  {props.capitalizeFirstLetter("technology")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
