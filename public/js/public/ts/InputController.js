//import Game from "./Game";
//var THREE = require("../../node_modules/three/build/three.js");
"use strict";
exports.__esModule = true;
var InputController = (function () {
    function InputController(canvas, document) {
        this.mousePosition = { x: 0, y: 0 };
        this.canvas = canvas;
        document.addEventListener("mousemove", this.mouseMove.bind(this));
    }
    InputController.prototype.getMousePosition = function () {
        return this.mousePosition;
    };
    InputController.prototype.mouseMove = function (evt) {
        var rect = this.canvas.getBoundingClientRect();
        this.mousePosition = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
        //console.log("mouse position", this.mousePosition);
    };
    return InputController;
}());
exports["default"] = InputController;
