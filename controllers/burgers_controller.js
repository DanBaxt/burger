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
 // router.put("api/burgers/:id", function(req, res) {
   // var condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  
 //   burger.update({
   //   devoured: req.body.condition
    //}, condition, function() {
      //res.redirect("/");
    //});
  //});
  
  router.delete("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function() {
      res.redirect("/");
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;