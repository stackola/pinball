"use strict";
exports.__esModule = true;
var Game_1 = require("./Game");
console.log("hi!");
var canvas;
var context;
function ready() {
    canvas = document.getElementById("main");
    context = canvas.getContext("2d");
    var g = new Game_1["default"](context);
}
document.addEventListener('DOMContentLoaded', ready);
