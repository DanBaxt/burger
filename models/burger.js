var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //Could not get Update part to work, I was having issues with getting it to create a burger without crashing
  //update: function(objColVals, condition, cb) {
    //orm.update("burgers", objColVals, condition, function(res) {
      //cb(res);
    //});
  //},
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;