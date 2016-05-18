/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var ajax = require("../models/Ajax");
module.exports = {
  record: (req, res) => {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.log("Post request : record is done.");
    ajax.create(ajax.define());
  }
};
