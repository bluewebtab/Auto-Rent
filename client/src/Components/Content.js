import React, { Component } from "react";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="main-phrase">
          <h1 className="white-font">
            Find Cheap <span className="red-font">Rentals in your area</span>
          </h1>
        </div>
        <div className="container">
          <Link to="/CarInventory" className="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Start Now
          </Link>
        </div>
      </div>
    );
  }
}

export default Content;
