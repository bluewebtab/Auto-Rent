import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CarCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }

  render() {
    const car = this.props.car;
    return (
      <div>
        <Link to={`/carInventory/${car.id}`}>
          <div className="car-model">
            <div className="car-image">
              <img src="" />
            </div>

            <div className="car-content">
              <h1>car</h1>
              <div className="mileage">
                mileage: <span>32,000</span>
              </div>
              <div className="price">
                price: <span>22,000</span>
              </div>
              <div className="body">
                body: <span>12,000</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CarCard;
