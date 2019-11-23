import React, { Component } from "react";
import CarInventory from "./CarInventory";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CarListing extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchCars());
  }

  render() {
    return (
      <div className="carInventory">
        <CarInventory cars={this.props.cars} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars.data
  };
}

export default connect(mapStateToProps)(CarListing);
