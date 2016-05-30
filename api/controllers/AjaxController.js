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
        var Count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < result.Count; i++) {
          Count[0] = result.Items[i].attrs.extensions.OES_texture_float_linear ? Count[0] + 1 : Count[0];
          Count[1] = result.Items[i].attrs.extensions.OES_texture_float ? Count[1] + 1 : Count[1];
          Count[2] = result.Items[i].attrs.extensions.OES_element_index_uint ? Count[2] + 1 : Count[2];
          Count[3] = result.Items[i].attrs.extensions.OES_texture_half_float ? Count[3] + 1 : Count[3];
          Count[4] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_atc ? Count[4] + 1 : Count[4];
          Count[5] = result.Items[i].attrs.extensions.OES_texture_half_float_linear ? Count[5] + 1 : Count[5];
          Count[6] = result.Items[i].attrs.extensions.WEBGL_lose_context ? Count[6] + 1 : Count[6];
          Count[7] = result.Items[i].attrs.extensions.EXT_texture_filter_anisotropic ? Count[7] + 1 : Count[7];
          Count[8] = result.Items[i].attrs.extensions.WEBGL_debug_renderer_info ? Count[8] + 1 : Count[8];
          Count[9] = result.Items[i].attrs.extensions.EXT_frag_depth ? Count[9] + 1 : Count[9];
          Count[10] = result.Items[i].attrs.extensions.OES_vertex_array_object ? Count[10] + 1 : Count[10];
          Count[11] = result.Items[i].attrs.extensions.EXT_shader_texture_lod ? Count[11] + 1 : Count[11];
          Count[12] = result.Items[i].attrs.extensions.EXT_disjoint_timer_query ? Count[12] + 1 : Count[12];
          Count[13] = result.Items[i].attrs.extensions.WEBGL_depth_texture ? Count[13] + 1 : Count[13];
          Count[14] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_etc1 ? Count[14] + 1 : Count[14];
          Count[15] = result.Items[i].attrs.extensions.ANGLE_instanced_arrays ? Count[15] + 1 : Count[15];
          Count[16] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_s3tc ? Count[16] + 1 : Count[16];
          Count[17] = result.Items[i].attrs.extensions.EXT_sRGB ? Count[17] + 1 : Count[17];
          Count[18] = result.Items[i].attrs.extensions.WEBGL_draw_buffers ? Count[18] + 1 : Count[18];
          Count[19] = result.Items[i].attrs.extensions.WEBGL_compressed_texture_pvrtc ? Count[19] + 1 : Count[19];
          Count[20] = result.Items[i].attrs.extensions.WEBGL_color_buffer_float ? Count[20] + 1 : Count[20];
          Count[21] = result.Items[i].attrs.extensions.EXT_color_buffer_half_float ? Count[21] + 1 : Count[21];
          Count[22] = result.Items[i].attrs.extensions.OES_standard_derivatives ? Count[22] + 1 : Count[22];
          Count[23] = result.Items[i].attrs.extensions.EXT_blend_minmax ? Count[23] + 1 : Count[23];
          Count[24] = result.Items[i].attrs.extensions.WEBGL_debug_shaders ? Count[24] + 1 : Count[24];
        }
        res.json({"ItemCount": result.Count,"parametersCount" : Count});
      }, function(err) {
        res.json(err);
      });
  }
};
