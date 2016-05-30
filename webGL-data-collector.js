  var canvas = document.createElement("canvas");
  var gl = canvas.getContext("webgl");

  /*Get WebGL Extensions*/
  var extensions = [
    "ANGLE_instanced_arrays",
    "EXT_blend_minmax",
    "EXT_color_buffer_half_float",
    "EXT_disjoint_timer_query",
    "EXT_frag_depth",
    "EXT_sRGB",
    "EXT_shader_texture_lod",
    "EXT_texture_filter_anisotropic",
    "OES_element_index_uint",
    "OES_standard_derivatives",
    "OES_texture_float",
    "OES_texture_float_linear",
    "OES_texture_half_float",
    "OES_texture_half_float_linear",
    "OES_vertex_array_object",
    "WEBGL_color_buffer_float",
    "WEBGL_compressed_texture_atc",
    "WEBGL_compressed_texture_etc1",
    "WEBGL_compressed_texture_pvrtc",
    "WEBGL_compressed_texture_s3tc",
    "WEBGL_debug_renderer_info",
    "WEBGL_debug_shaders",
    "WEBGL_depth_texture",
    "WEBGL_draw_buffers",
    "WEBGL_lose_context"
  ];
  var extensionsResult = {};
  extensions.forEach(function(name) {
    extensionsResult[name] = gl.getExtension(name) !== null;
  });
  var isSupported;
  if (gl.getExtension("WEBGL_color_buffer_float") === null) {
    var fbo = gl.createFramebuffer();
    var tex = gl.createTexture();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      isSupported = false;
    } else {
      isSupported = true;
    }
    gl.deleteTexture(tex);
    gl.deleteFramebuffer(fbo);
  } else {
    isSupported = true;
  }

  if (isSupported) {
    extensionsResult["WEBGL_color_buffer_float"] = isSupported;
  }
  /*Get WebGL Parameters*/
  var parameters = {
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS,
    MAX_CUBE_MAP_TEXTURE_SIZE: gl.MAX_CUBE_MAP_TEXTURE_SIZE,
    MAX_FRAGMENT_UNIFORM_VECTORS: gl.MAX_FRAGMENT_UNIFORM_VECTORS,
    MAX_RENDERBUFFER_SIZE: gl.MAX_RENDERBUFFER_SIZE,
    MAX_TEXTURE_IMAGE_UNITS: gl.MAX_TEXTURE_IMAGE_UNITS,
    MAX_TEXTURE_SIZE: gl.MAX_TEXTURE_SIZE,
    MAX_VARYING_VECTORS: gl.MAX_VARYING_VECTORS,
    MAX_VERTEX_ATTRIBS: gl.MAX_VERTEX_ATTRIBS,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS,
    MAX_VERTEX_UNIFORM_VECTORS: gl.MAX_VERTEX_UNIFORM_VECTORS,
    MAX_VIEWPORT_DIMS: gl.MAX_VIEWPORT_DIMS,
  };
  var parametersResult = {};
  Object.keys(parameters).forEach(function(name) {
    if (name == "MAX_VIEWPORT_DIMS") {
      var x = gl.getParameter(parameters[name]);
      parametersResult[name + "_0"] = x[0];
      parametersResult[name + "_1"] = x[1];
    } else {
      parametersResult[name] = gl.getParameter(parameters[name]);
    }
  });

  /*Get User Status*/
  var userStatus = {
      UserAgent: navigator.userAgent,
    }
    /*Result*/
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:1337/record/");
  xhr.addEventListener("loadend", function() {
    console.info(xhr.response);
  });
  xhr.send(JSON.stringify({
    status: userStatus,
    parameters: parametersResult,
    extensions: extensionsResult
  }));
