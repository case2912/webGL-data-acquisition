/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var table = require("../models/Table");
var parser = require('ua-parser-js');

module.exports = {
  record: (req, res) => {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.info("Post: record is done.".green);
    table.put(req.allParams());
    var ua = parser(JSON.stringify(params["status"]));
    console.log(ua.os);
    console.log(ua.browser);
  },
  show:(req,res) =>{
    res.json({test:"hello"});
  }
};
