/// <reference path="./../../typings/tsd.d.ts" />
import target from "./target";
import uuid from "./uuid";
import * as cookie from "js-cookie";
const collector = () => {
    const canvas = document.createElement("canvas");
    const gl = <WebGLRenderingContext>canvas.getContext("webgl");
    const extensionsResult = {};
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
    const id = uuid();
    cookie.set("key", id);
    console.log(cookie.get("key"));
    console.log({
        id: id,
        user: user,
        extensions: extensionsResult,
        parameters: parametersResult
    });
    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://localhost:3000/record/");
    // xhr.send(JSON.stringify({
    //     id: id,
    //     status: status,
    //     extensions: extensionsResult,
    //     parameters: parametersResult
    // }));
};
collector();
