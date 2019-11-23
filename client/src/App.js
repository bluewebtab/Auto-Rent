import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./scss/styles.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Provider } from "react-redux";

import Main from "./Components/Main";
import Header from "./Components/Header";
import CarListing from "./Components/car-listing/CarListing";
import CarDetail from "./Components/car-detail/CarDetail";

const store = require("./reducers").init();

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: []
  //   };
  // }
  // componentDidMount() {
  //   this.getCars();
  // }

  // getCars = () => {
  //   axios("http://localhost:5000")
  //     .then(data => {
  //       console.log(data.data.cars);
  //       this.setState({ cars: data.data.cars });
  //     })
  //     // .then(({response}) => this.setState({users: response.users}))
  //     .catch(error => console.log(error));
  // };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/mainPage" />;
              }}
            />
            <Route exact path="/mainPage" component={Main} />
            <Route exact path="/carInventory" component={CarListing} />
            <Route exact path="/carInventory/:id" component={CarDetail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
