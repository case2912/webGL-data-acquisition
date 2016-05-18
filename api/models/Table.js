/**
 * Ajax.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var vogels = require("vogels");
var Joi = require("joi");
var uuid = require("node-uuid");
vogels.AWS.config.loadFromPath("credentials.json");

var table = vogels.define("webgl_statu", {
  hashKey: "ID",
  schema: {
    ID: Joi.string(),
    data: Joi.object()
  }
});

vogels.createTables(err => {
  if (err) {
    console.error("Initializing DynamoDB tables was failed".red, err);
  } else {
    console.info("DynamoDB tables was initialized without any error".green);
  }
});

module.exports = {
  put : function(params) {
    return new Promise((resolve, reject) => {
      var id = uuid.v4();
      table.create({
        ID: id,
        data: params
      }, (err, res) => {
        if (err) {
          reject("Putting item was failed".red,err);
        } else {
          resolve();
          console.info("without any error".green);
        }
      });
    });
  }
};
