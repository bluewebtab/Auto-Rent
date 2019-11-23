import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CarDetail extends Component {
  componentWillMount() {
    const carId = this.props.match.params.id;
    this.props.dispatch(actions.fetchCarById(carId));
  }
  render() {
    const car = this.props.car;

    if (car.id) {
      return (
        <div className="">
          <h1>{car.title}</h1>

          <h1>{car.model}</h1>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    car: state.car.data
  };
}

export default connect(mapStateToProps)(CarDetail);
