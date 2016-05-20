/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var table = require("../models/Table");
module.exports = {
  record: (req, res) => {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.info("Post: record is done.".green);
    table.put(req.allParams());
  },
  show:(req,res) =>{
    res.json({test:"hello"});
  }
};
