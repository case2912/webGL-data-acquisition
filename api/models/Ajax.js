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
      TableName: "webGL_data",
      KeySchema: [{
        AttributeName: "ID",
          KeyType: "HASH"
      },{
        AttributeName: "ANGLE_instanced_arrays",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_blend_minmax",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_color_buffer_half_float",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_disjoint_timer_query",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_frag_depth",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_sRGB",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_shader_texture_lod",
          KeyType: "RANGE"
      }, {
        AttributeName: "EXT_texture_filter_anisotropic",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_element_index_uint",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_standard_derivatives",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_texture_float",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_texture_float_linear",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_texture_half_float",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_texture_half_float_linear",
          KeyType: "RANGE"
      }, {
        AttributeName: "OES_vertex_array_object",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_color_buffer_float",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_compressed_texture_atc",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_compressed_texture_etc1",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_compressed_texture_pvrtc",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_compressed_texture_s3tc",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_debug_renderer_info",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_debug_shaders",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_depth_texture",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_draw_buffers",
          KeyType: "RANGE"
      }, {
        AttributeName: "WEBGL_lose_context",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_CUBE_MAP_TEXTURE_SIZE",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_FRAGMENT_UNIFORM_VECTORS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_RENDERBUFFER_SIZE",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_TEXTURE_IMAGE_UNITS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_TEXTURE_SIZE",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_VARYING_VECTORS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_VERTEX_ATTRIBS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_VERTEX_UNIFORM_VECTORS",
          KeyType: "RANGE"
      }, {
        AttributeName: "MAX_VIEWPORT_DIMS",
          KeyType: "RANGE"
      }, {
        AttributeName: "userAgent",
          KeyType: "RANGE"
      }],
      AttributeDefinitions: [ {
        AttributeName: "ID",
        AttributeType: "N"
      },{
        AttributeName: "ANGLE_instanced_arrays",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_blend_minmax",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_color_buffer_half_float",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_disjoint_timer_query",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_frag_depth",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_sRGB",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_shader_texture_lod",
        AttributeType: "S"
      }, {
        AttributeName: "EXT_texture_filter_anisotropic",
        AttributeType: "S"
      }, {
        AttributeName: "OES_element_index_uint",
        AttributeType: "S"
      }, {
        AttributeName: "OES_standard_derivatives",
        AttributeType: "S"
      }, {
        AttributeName: "OES_texture_float",
        AttributeType: "S"
      }, {
        AttributeName: "OES_texture_float_linear",
        AttributeType: "S"
      }, {
        AttributeName: "OES_texture_half_float",
        AttributeType: "S"
      }, {
        AttributeName: "OES_texture_half_float_linear",
        AttributeType: "S"
      }, {
        AttributeName: "OES_vertex_array_object",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_color_buffer_float",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_compressed_texture_atc",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_compressed_texture_etc1",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_compressed_texture_pvrtc",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_compressed_texture_s3tc",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_debug_renderer_info",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_debug_shaders",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_depth_texture",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_draw_buffers",
        AttributeType: "S"
      }, {
        AttributeName: "WEBGL_lose_context",
        AttributeType: "S"
      }, {
        AttributeName: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_CUBE_MAP_TEXTURE_SIZE",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_FRAGMENT_UNIFORM_VECTORS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_RENDERBUFFER_SIZE",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_TEXTURE_IMAGE_UNITS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_TEXTURE_SIZE",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_VARYING_VECTORS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_VERTEX_ATTRIBS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_VERTEX_UNIFORM_VECTORS",
        AttributeType: "N"
      }, {
        AttributeName: "MAX_VIEWPORT_DIMS",
        AttributeType: "N"
      }, {
        AttributeName: "userAgent",
        AttributeType: "S"
      }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
    return table
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