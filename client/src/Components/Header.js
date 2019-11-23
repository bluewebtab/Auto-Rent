import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <i className="fab fa-autoprefixer" />
          <Link className="company-name" to="/mainPage">
            AutoRent
          </Link>
        </div>

        <div className="header-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
