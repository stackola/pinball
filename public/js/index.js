"use strict";
//import Player from "./Player"; 
console.log("hi!");
var viewport;
var canvas;
var context;
function resize() {
    viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    context.fillStyle = "#ff1122";
    context.fillRect(0, 0, viewport.width, viewport.height);
}
function ready() {
    canvas = document.getElementById("main");
    context = canvas.getContext("2d");
    resize();
    window.addEventListener('resize', resize);
}
document.addEventListener('DOMContentLoaded', ready);
