// module.exports = function(app, db) {
//   app.get("/", function(req, res) {
//     db.query("SELECT * FROM cars", function(err, data) {
//       err ? res.send(err) : res.json({ cars: data });
//     });
//   });
// };

///////New Route Plan//////
module.exports = function(app) {
  var carList = require("../controller/carController");

  // carList Routes
  app
    .route("/carInventory")
    .get(carList.list_all_cars)
    .post(carList.create_a_car);

  app
    .route("/carInventory/:id")
    .get(carList.read_a_car)
    .put(carList.update_a_car)
    .delete(carList.delete_a_car);
};
