const mysql = require("mysql");
const config = require("./config.js");

const connection = mysql.createConnection(config);

const getParks = callback => {
  const queryStr = "SELECT * FROM parks";
  connection.query(queryStr, (err, run) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, run);
  });
};

const getOnePark = (id, callback) => {
  const queryStr = `SELECT * FROM parks WHERE id = ${id}`;
  connection.query(queryStr, (err, run) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, run);
  });
};

module.exports = {
  getParks,
  getOnePark
};
