import React, { Component } from "react";
import CarCard from "./CarCard";

import * as actions from "../../actions";

export default class CarInventory extends Component {
  showCars() {
    return this.props.cars.map((car, index) => {
      return <CarCard key={index} car={car} />;
    });
  }

  render() {
    return <div className="car-container">{this.showCars()}</div>;
  }
}
