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
  burger.create(req.body.burger_name, function(result) {
  
    console.log(result);
    res.redirect("/");
    });
  });
  //Update is not working right
  router.put("/api/burgers/:id", function(req, res) {
  
    burger.update(req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });
  
  
  
  // Export routes for server.js to use.
  module.exports = router;