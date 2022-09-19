import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
      <div className="Nav">
        <h1 className="h1"> Navbar </h1>
        <ul className="ul">
          <li className="li">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="li">
            <Link className="link" to="/about">About Us</Link>
          </li>
          <li className="li">
            <Link className="link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
