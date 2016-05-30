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
  timestamps: true,
  schema: {
    ID: Joi.string(),
    extensions: Joi.object(),
    parameters: Joi.object(),
    platform: Joi.object(),
    application: Joi.object()
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
  put: function(extensions, parameters, platform, application) {
    return new Promise((resolve, reject) => {
      var id = uuid.v4();
      table.create({
        ID: id,
        extensions: extensions,
        parameters: parameters,
        platform: platform,
        application: application
      }, (err, res) => {
        if (err) {
          reject("Unable to insert element.".red, err);
        } else {
          console.log("Inserted element successfully.".green);
          resolve();
        }
      });
    });
  },
  scanAll: function(){
    return new Promise((resolve, reject) => {
      table
        .scan()
        .limit(1000)
        .loadAll()
        .exec((err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
    });
  }
};
