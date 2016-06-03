/// <reference path="../../typings/index.d.ts" />
import {v4} from "node-uuid";
import target from "./target";
const collecter = () => {
    const canvas = document.createElement("canvas");
    const gl = this.canvas.getContext("webgl");
    const extensionsResult: { [key: string]: boolean } = {};
    for (let i = 0; i < target.extensions.length; i++) {
        extensionsResult[target.extensions[i]] = gl.getExtension(target.extensions[i]) !== null;
    }
    let isSupported = false;
    if (gl.getExtension("WEBGL_color_buffer_float") === null) {
        const fbo = gl.createFramebuffer();
        const tex = gl.createTexture();
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
    const parametersResult: { [key: string]: number } = {};
    for (let i = 0; i < target.parameters.length; i++) {
        if (target.parameters[i] === "MAX_VIEWPORT_DIMS") {
            let temp = gl.getParameter(gl[target.parameters[i]]);
            parametersResult[target.parameters[i] + "_0"] = temp[0];
            parametersResult[target.parameters[i] + "_1"] = temp[1];
        } else {
            parametersResult[target.parameters[i]] = gl.getParameter(gl[target.parameters[i]]);
        }
    }
    const user = {
        status: navigator.userAgent
    };
    const id = v4();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:1337/record/");
    xhr.send(JSON.stringify({
        id: id,
        status: status,
        extensions: extensionsResult,
        parameters: parametersResult
    }));
};
collecter();
