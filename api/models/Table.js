/**
 * Ajax.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var vogels = require("vogels");
var Joi = require("joi");
vogels.AWS.config.loadFromPath("credentials.json");

var table = vogels.define("webgl_statu", {
  hashKey: "ID",
  timestamps: true,
  schema: {
    ID: Joi.string(),
    extensions: Joi.object(),
    parameters: Joi.object(),
    platform_name: Joi.string(),
    platform_version: Joi.string(),
    browser_name: Joi.string(),
    browser_version: Joi.string()
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
  put: function(id,extensions, parameters, platform_name, platform_version, browser_name, browser_version) {
    return new Promise((resolve, reject) => {
      table.create({
        ID: id,
        extensions: extensions,
        parameters: parameters,
        platform_name: platform_name.toLowerCase().replace(/\s/g,""),
        platform_version: platform_version,
        browser_name: browser_name.toLowerCase().replace(/\s/g,""),
        browser_version: browser_version
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
  scan: function(name,version) {
    return new Promise((resolve, reject) => {
      table
        .scan()
        .where('browser_name')
        .equals(name)
        .where('browser_version')
        .equals(version)
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
