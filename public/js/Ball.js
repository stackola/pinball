"use strict";
exports.__esModule = true;
var Vector_1 = require("./Vector");
var Ball = (function () {
    function Ball() {
        this.gravity = new Vector_1["default"](0, 1);
        this.position = new Vector_1["default"](200, 200);
        console.log("balll created");
    }
    Ball.prototype.tick = function () {
        this.position.add(this.gravity);
    };
    Ball.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#003300';
        context.stroke();
        context.closePath();
    };
    return Ball;
}());
exports["default"] = Ball;
