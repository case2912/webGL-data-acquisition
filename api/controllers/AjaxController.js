/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var table = require("../models/Table");
var parser = require('ua-parser-js');
module.exports = {
  record: function(req, res) {
    var params = req.allParams();
    res.send("This is from AjaxController!");
    console.info("Post: record is done.".green);
    var ua = parser(JSON.stringify(params["status"]));
    table.put(params["extensions"], params["parameters"], ua.os, ua.browser);
  },
  show: function(req, res) {
    res.json({
      test: "hello"
    });
  },
  list: function(req, res) {
    table.scanAll()
      .then(function(result) {

        var extensions_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < result.Count; i++) {
          extensions_count[0] = result.Items[i].attrs.extensions.OES_texture_float_linear ? extensions_count[0] + 1 : extensions_extensions_count[0];
          extensions_count[1] = result.Items[i].attrs.extensions.OES_texture_float ? extensions_count[1] + 1 : extensions_count[1];
          extensions_count[2] = result.Items[i].attrs.extensions.OES_element_index_uint ? extensions_count[2] + 1 : extensions_count[2];
          extensions_count[3] = result.Items[i].attrs.extensions.OES_texture_half_float ? extensions_count[3] + 1 : extensions_count[3];
          extensions_count[4] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_atc ? extensions_count[4] + 1 : extensions_count[4];
          extensions_count[5] = result.Items[i].attrs.extensions.OES_texture_half_float_linear ? extensions_count[5] + 1 : extensions_count[5];
          extensions_count[6] = result.Items[i].attrs.extensions.WEBGL_lose_context ? extensions_count[6] + 1 : extensions_count[6];
          extensions_count[7] = result.Items[i].attrs.extensions.EXT_texture_filter_anisotropic ? extensions_count[7] + 1 : extensions_count[7];
          extensions_count[8] = result.Items[i].attrs.extensions.WEBGL_debug_renderer_info ? extensions_count[8] + 1 : extensions_count[8];
          extensions_count[9] = result.Items[i].attrs.extensions.EXT_frag_depth ? extensions_count[9] + 1 : extensions_count[9];
          extensions_count[10] = result.Items[i].attrs.extensions.OES_vertex_array_object ? extensions_count[10] + 1 : extensions_count[10];
          extensions_count[11] = result.Items[i].attrs.extensions.EXT_shader_texture_lod ? extensions_count[11] + 1 : extensions_count[11];
          extensions_count[12] = result.Items[i].attrs.extensions.EXT_disjoint_timer_query ? extensions_count[12] + 1 : extensions_count[12];
          extensions_count[13] = result.Items[i].attrs.extensions.WEBGL_depth_texture ? extensions_count[13] + 1 : extensions_count[13];
          extensions_count[14] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_etc1 ? extensions_count[14] + 1 : extensions_count[14];
          extensions_count[15] = result.Items[i].attrs.extensions.ANGLE_instanced_arrays ? extensions_count[15] + 1 : extensions_count[15];
          extensions_count[16] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_s3tc ? extensions_count[16] + 1 : extensions_count[16];
          extensions_count[17] = result.Items[i].attrs.extensions.EXT_sRGB ? extensions_count[17] + 1 : extensions_count[17];
          extensions_count[18] = result.Items[i].attrs.extensions.WEBGL_draw_buffers ? extensions_count[18] + 1 : extensions_count[18];
          extensions_count[19] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_pvrtc ? extensions_count[19] + 1 : extensions_count[19];
          extensions_count[20] = result.Items[i].attrs.extensions.WEBGL_color_buffer_float ? extensions_count[20] + 1 : extensions_count[20];
          extensions_count[21] = result.Items[i].attrs.extensions.EXT_color_buffer_half_float ? extensions_count[21] + 1 : extensions_count[21];
          extensions_count[22] = result.Items[i].attrs.extensions.OES_standard_derivatives ? extensions_count[22] + 1 : extensions_count[22];
          extensions_count[23] = result.Items[i].attrs.extensions.EXT_blend_minmax ? extensions_count[23] + 1 : extensions_count[23];
          extensions_count[24] = result.Items[i].attrs.extensions.WEBGL_debug_shaders ? extensions_count[24] + 1 : extensions_count[24];
        }

        var parameters_max = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < result.Count; i++) {
          parameters_max[0] = parameters_max[0] < result.Items[i].attrs.parameters.MAX_TEXTURE_SIZE ? result.Items[i].attrs.parameters.MAX_TEXTURE_SIZE : parameters_max[0];
          parameters_max[1] = parameters_max[1] < result.Items[i].attrs.parameters.MAX_COMBINED_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_COMBINED_TEXTURE_IMAGE_UNITS : parameters_max[1];
          parameters_max[2] = parameters_max[2] < result.Items[i].attrs.parameters.MAX_VERTEX_UNIFORM_VECTORS ? result.Items[i].attrs.parameters.MAX_VERTEX_UNIFORM_VECTORS : parameters_max[2];
          parameters_max[3] = parameters_max[3] < result.Items[i].attrs.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS : parameters_max[3];
          parameters_max[4] = parameters_max[4] < result.Items[i].attrs.parameters.MAX_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_TEXTURE_IMAGE_UNITS : parameters_max[4];
          parameters_max[5] = parameters_max[5] < result.Items[i].attrs.parameters.MAX_RENDERBUFFER_SIZE ? result.Items[i].attrs.parameters.MAX_RENDERBUFFER_SIZE : parameters_max[5];
          parameters_max[6] = parameters_max[6] < result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_0 ? result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_0 : parameters_max[6];
          parameters_max[7] = parameters_max[7] < result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_1 ? result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_1 : parameters_max[7];
          parameters_max[8] = parameters_max[8] < result.Items[i].attrs.parameters.MAX_FRAGMENT_UNIFORM_VECTORS ? result.Items[i].attrs.parameters.MAX_FRAGMENT_UNIFORM_VECTORS : parameters_max[8];
          parameters_max[9] = parameters_max[9] < result.Items[i].attrs.parameters.MAX_CUBE_MAP_TEXTURE_SIZE ? result.Items[i].attrs.parameters.MAX_CUBE_MAP_TEXTURE_SIZE : parameters_max[9];
          parameters_max[10] = parameters_max[10] < result.Items[i].attrs.parameters.MAX_VERTEX_ATTRIBS ? result.Items[i].attrs.parameters.MAX_VERTEX_ATTRIBS : parameters_max[10];
          parameters_max[11] = parameters_max[11] < result.Items[i].attrs.parameters.MAX_VARYING_VECTORS ? result.Items[i].attrs.parameters.MAX_VARYING_VECTORS : parameters_max[11];

        }

        var parameters_min = [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity];
        for (var i = 0; i < result.Count; i++) {
          parameters_min[0] = parameters_min[0] > result.Items[i].attrs.parameters.MAX_TEXTURE_SIZE ? result.Items[i].attrs.parameters.MAX_TEXTURE_SIZE : parameters_min[0];
          parameters_min[1] = parameters_min[1] > result.Items[i].attrs.parameters.MAX_COMBINED_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_COMBINED_TEXTURE_IMAGE_UNITS : parameters_min[1];
          parameters_min[2] = parameters_min[2] > result.Items[i].attrs.parameters.MAX_VERTEX_UNIFORM_VECTORS ? result.Items[i].attrs.parameters.MAX_VERTEX_UNIFORM_VECTORS : parameters_min[2];
          parameters_min[3] = parameters_min[3] > result.Items[i].attrs.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS : parameters_min[3];
          parameters_min[4] = parameters_min[4] > result.Items[i].attrs.parameters.MAX_TEXTURE_IMAGE_UNITS ? result.Items[i].attrs.parameters.MAX_TEXTURE_IMAGE_UNITS : parameters_min[4];
          parameters_min[5] = parameters_min[5] > result.Items[i].attrs.parameters.MAX_RENDERBUFFER_SIZE ? result.Items[i].attrs.parameters.MAX_RENDERBUFFER_SIZE : parameters_min[5];
          parameters_min[6] = parameters_min[6] > result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_0 ? result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_0 : parameters_min[6];
          parameters_min[7] = parameters_min[7] > result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_1 ? result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_1 : parameters_min[7];
          parameters_min[8] = parameters_min[8] > result.Items[i].attrs.parameters.MAX_FRAGMENT_UNIFORM_VECTORS ? result.Items[i].attrs.parameters.MAX_FRAGMENT_UNIFORM_VECTORS : parameters_min[8];
          parameters_min[9] = parameters_min[9] > result.Items[i].attrs.parameters.MAX_CUBE_MAP_TEXTURE_SIZE ? result.Items[i].attrs.parameters.MAX_CUBE_MAP_TEXTURE_SIZE : parameters_min[9];
          parameters_min[10] = parameters_min[10] > result.Items[i].attrs.parameters.MAX_VERTEX_ATTRIBS ? result.Items[i].attrs.parameters.MAX_VERTEX_ATTRIBS : parameters_min[10];
          parameters_min[11] = parameters_min[11] > result.Items[i].attrs.parameters.MAX_VARYING_VECTORS ? result.Items[i].attrs.parameters.MAX_VARYING_VECTORS : parameters_min[11];
        }

        var parameters_average =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var total = 0;
        for (var i = 0; i < result.Count; i++) {
          parameters_average[0] += (result.Items[i].attrs.parameters.MAX_TEXTURE_SIZE - parameters_average[0])/ (total + 1);
          parameters_average[1] += (result.Items[i].attrs.parameters.MAX_COMBINED_TEXTURE_IMAGE_UNITS - parameters_average[1])/ (total + 1);
          parameters_average[2] += (result.Items[i].attrs.parameters.MAX_VERTEX_UNIFORM_VECTORS - parameters_average[2])/ (total + 1);
          parameters_average[3] += (result.Items[i].attrs.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS - parameters_average[3])/ (total + 1);
          parameters_average[4] += (result.Items[i].attrs.parameters.MAX_TEXTURE_IMAGE_UNITS - parameters_average[4])/ (total + 1);
          parameters_average[5] += (result.Items[i].attrs.parameters.MAX_RENDERBUFFER_SIZE - parameters_average[5])/ (total + 1);
          parameters_average[6] += (result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_0 - parameters_average[6])/ (total + 1);
          parameters_average[7] += (result.Items[i].attrs.parameters.MAX_VIEWPORT_DIMS_1 - parameters_average[7])/ (total + 1);
          parameters_average[8] += (result.Items[i].attrs.parameters.MAX_FRAGMENT_UNIFORM_VECTORS - parameters_average[8])/ (total + 1);
          parameters_average[9] += (result.Items[i].attrs.parameters.MAX_CUBE_MAP_TEXTURE_SIZE - parameters_average[9])/ (total + 1);
          parameters_average[10] += (result.Items[i].attrs.parameters.MAX_VERTEX_ATTRIBS - parameters_average[10])/ (total + 1);
          parameters_average[11] += (result.Items[i].attrs.parameters.MAX_VARYING_VECTORS - parameters_average[11])/ (total + 1);

          total = total + 1;
        }

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
