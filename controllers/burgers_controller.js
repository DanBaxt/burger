var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
      var allBurgs = {
        burgers: data
      };
     
      res.render('index', allBurgs);
    });
  });
  
  router.post('/burgers', function(req, res) {
    burger.create([
      'burger_name', 'devoured'
    ], [
      req.body.burger_name, req.body.devoured
    ], function(data) {
      res.redirect('/');
    });
  });
  //Update is not working right
  router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.condition
    }, condition, function() {
      res.redirect("/");
    });
  });
  
  router.delete("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });
  
  // Export routes for server.js to use.
  module.exports = router;