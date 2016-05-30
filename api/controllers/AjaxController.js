/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var table = require("../models/Table");
var statistics = require("../models/Statistics");
var parser = require('ua-parser-js');
module.exports = {
  record: function(req, res) {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.info("Post: record is done.".green);
    var ua = parser(JSON.stringify(params.status));
    table.put(params.extensions, params.parameters, ua.os, ua.browser);
  },
  list: function(req, res) {
    table.scanAll()
      .then(function(result) {
        var extensions_count = statistics.extensions_count(result);
        var parameters_max = statistics.parameters_max(result);
        var parameters_min = statistics.parameters_min(result);
        var parameters_average = statistics.parameters_average(result);
        res.json({
          "item_count": result.Count,
          "extensions_count": extensions_count,
          "parameters_max": parameters_max,
          "parameters_min": parameters_min,
          "parameters_average": parameters_average
        });
        res.json(result.Items[0].attrs.parameters)
      }, function(err) {
        res.json(err);
      });
  }
};
