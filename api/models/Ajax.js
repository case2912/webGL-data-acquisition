/**
 * Ajax.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');
var dynamodb = new AWS.DynamoDB();
module.exports = {
  define: function() {
    var table = {
    }
    return table;
  },
  create: function(table) {
    dynamodb.createTable(table, function(err, data) {
      if (err) {
        console.log("Unable to create table. Error is", err);
      } else {
        console.log("Created table successfully.");
      }
    });
  },
  put: function(item) {
    dynamodb.putItem(item, function(err, data) {
      if (err) {
        console.log("Unable to insert element. Error is", err);
      } else {
        console.log("Inserted element successfully.");
      }
    });
  }
};
