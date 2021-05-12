import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="navbar">
      <div className="left-section">
        <p>
          <Link className="linkactive" to="/">
            Landkit.
          </Link>
        </p>
      </div>
      <div className="right-section">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/adduser">
              Add User
            </Link>
          </li>
          <li>
            <Link className="link" to="/listuser">
              Users
            </Link>
          </li>
          <li>
            <button className="btn pry">Buy now</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
