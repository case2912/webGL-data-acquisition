/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var table = require("../models/Table");
var parser = require('ua-parser-js');

module.exports = {
  record: function(req, res) {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.info("Post: record is done.".green);
    var ua = parser(JSON.stringify(params["status"]));
    table.put(params["extensions"],params["parameters"],ua.os,ua.browser);
  },
  show: function(req, res){
    res.json({
      test: "hello"
    });
  },
  list: function(req, res){
    table.scanAll()
      .then(function(result){
        console.info(result.Items[0].attrs.parameters);
        res.json(result.Items[0].attrs.parameters);
      },function(err){
        res.json(err);
      });
  }
};
