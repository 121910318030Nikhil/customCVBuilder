var express = require("express");
var router = express.Router();
const mysql = require('mysql')

router.get("/", function(req, res, next) {
  const connection = mysql.createConnection({
    host: 'localhost',
        user: 'nikhil',
        password: 'nikhil',
        database: 'project'
  })
  
  connection.connect()
  
  connection.query('SELECT * FROM contact WHERE userId=1', (err, rows, fields) => {
    if (err) throw err
  result= rows;
  res.send(result);
  })
  
  connection.end()
   

});

module.exports = router;