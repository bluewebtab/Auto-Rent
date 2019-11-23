const mysql = require("mysql");

module.exports = function(app, db) {
  app.get("/", function(req, res) {
    db.query("SELECT * FROM cars", function(err, data) {
      err ? res.send(err) : res.json({ cars: data });
    });
  });
};
