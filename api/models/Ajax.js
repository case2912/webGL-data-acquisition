/**
 * Ajax.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var vogels = require("vogels");
var Joi = require("joi");

vogels.AWS.config.loadFromPath("credentials.json");

vogels.define("test", {
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
}, (err) => {
  console.error("Failed to load secrets.json".red, err);
});
