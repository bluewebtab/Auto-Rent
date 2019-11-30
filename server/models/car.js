"user strict";
var sql = require("./db.js");

//Task object constructor
var Car = function(car) {
  this.title = car.title;
  this.image = car.image;
  this.body = car.body;
  this.year = car.year;
  this.model = car.model;
  this.mileage = car.mileage;
  this.created_at = new Date();
};
Car.createCar = function(newCar, result) {
  sql.query("INSERT INTO cars set ?", newCar, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Car.getCarById = function(carId, result) {
  sql.query("Select * from cars where id =? ", carId, function(err, res) {
    console.log(err);
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Car.getAllCars = function(result) {
  sql.query("Select * from cars", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};
Car.updateById = function(id, car, result) {
  sql.query("UPDATE cars SET title = ? WHERE id = ?", [car.title, id], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Car.remove = function(id, result) {
  sql.query("DELETE FROM cars WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Car;
