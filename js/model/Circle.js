"use strict";
exports.__esModule = true;
var Circle = (function () {
    function Circle(position, r) {
        this.__b = undefined;
        this.hasCollided = false;
        this.shape = "circle";
        this.position = position;
        this.radius = r;
        this.range = {
            x: this.position.x - r,
            y: this.position.y - r,
            w: r * 2,
            h: r * 2
        };
        this.points = [this.position];
    }
    Circle.prototype.toString = function () {
        return JSON.stringify(this);
    };
    Circle.prototype.setRadius = function (newRadius) {
        this.radius = newRadius;
        this.range = {
            x: this.position.x - this.radius,
            y: this.position.y - this.radius,
            w: this.radius * 2,
            h: this.radius * 2
        };
    };
    Circle.prototype.move = function (newPos) {
        this.position = newPos;
        this.points = [this.position];
        this.range = {
            x: this.position.x - this.radius,
            y: this.position.y - this.radius,
            w: this.radius * 2,
            h: this.radius * 2
        };
    };
    return Circle;
}());
exports["default"] = Circle;
