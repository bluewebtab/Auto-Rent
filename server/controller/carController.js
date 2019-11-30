"use strict";

var Car = require("../models/car");

exports.list_all_cars = function(req, res) {
  Car.getAllCars(function(err, car) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", car);
    res.send(car);
  });
};

exports.create_a_car = function(req, res) {
  var new_car = new Car(req.body);

  //handles null error
  if (!new_car.title || !new_car.year) {
    res.status(400).send({ error: true, message: "Please provide car/year" });
  } else {
    Car.createCar(new_car, function(err, car) {
      if (err) res.send(err);
      res.json(car);
    });
  }
};

exports.read_a_car = function(req, res) {
  Car.getCarById(req.params.id, function(err, car) {
    if (err) res.send(err);
    res.json(car);
  });
};

exports.update_a_car = function(req, res) {
  Car.updateById(req.params.id, new Car(req.body), function(err, car) {
    if (err) res.send(err);
    res.json(car);
  });
};

exports.delete_a_car = function(req, res) {
  Car.remove(req.params.id, function(err, car) {
    if (err) res.send(err);
    res.json({ message: "Car successfully deleted" });
  });
};
