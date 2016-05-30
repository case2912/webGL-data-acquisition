"use strict";
/**
 * Statistics.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Targets = require("./../data/StatisticsTarget");

module.exports = {
  extensions_count: function(result) {
    const extensions_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < result.Count; i++) {
      for (var j = 0; j < Targets.extensions.length; j++) {
        result.Items[i].attrs.extensions[Targets.extensions[j]] && extensions_count[j]++;
      }
    }
    return extensions_count;
  },
  parameters_max: function(result) {
    const parameters_max = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < result.Count; i++) {
      for (var j = 0; j < Targets.parameters.length; j++) {
        parameters_max[j] < result.Items[i].attrs.parameters[Targets.parameters[j]] && (parameters_max[j] = result.Items[i].attrs.parameters[Targets.parameters[j]]);
      }
    }
    return parameters_max;
  },
  parameters_min: function(result) {
    const parameters_min = [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity];
    for (let i = 0; i < result.Count; i++) {
      for (var j = 0; j < Targets.parameters.length; j++) {
        parameters_min[j] > result.Items[i].attrs.parameters[Targets.parameters[j]] && (parameters_min[j] = result.Items[i].attrs.parameters[Targets.parameters[j]]);
      }
    }
    return parameters_min;
  },
  parameters_average: function(result) {
    var parameters_average = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var total = 0;
    for (let i = 0; i < result.Count; i++) {
      for (var j = 0; j < Targets.parameters.length; j++) {
        parameters_average[j] += (result.Items[i].attrs.parameters[Targets.parameters[j]] - parameters_average[j]) / (total + 1);
      }
      total = total + 1;
    }
    return parameters_average;
  }
};
