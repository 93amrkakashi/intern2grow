"use strict";
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const previewWindow = document.getElementById("preview-window");
function showPreview() {
    var _a;
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;
    const frame = (_a = previewWindow.contentWindow) === null || _a === void 0 ? void 0 : _a.document;
    if (frame) {
        frame.open();
        frame.write(html + "<style>" + css + "</style>" + "<script>" + js + "</script>");
        frame.close();
    }
}
function show(elementId) {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
    const result = document.getElementById("result");
    html.style.display = "none";
    css.style.display = "none";
    js.style.display = "none";
    result.style.display = "none";
    const selected = document.getElementById(elementId);
    selected.style.display = "block";
}
function showAll() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
    const result = document.getElementById("result");
    if (window.innerWidth >= 992) {
        html.style.display = "block";
        css.style.display = "block";
        js.style.display = "block";
        result.style.display = "block";
    }
    if (window.innerWidth < 992 && html.style.display === "block") {
        css.style.display = "none";
        js.style.display = "none";
        result.style.display = "none";
    }
}
window.addEventListener("resize", showAll);
