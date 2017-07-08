"use strict";
exports.__esModule = true;
var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    // Adds a Vector to the current Vector.
    Vector.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    };
    // Multiply both axis by a factor.
    Vector.prototype.scale = function (n) {
        this.x = this.x * n;
        this.y = this.y * n;
        return this;
    };
    // Normalize to lenth 1.
    Vector.prototype.normalize = function () {
        var l = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x = this.x / l;
        this.y = this.y / l;
        return this;
    };
    // Create a random Vector of length 1
    Vector.random = function () {
        return new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
    };
    Vector.prototype.toObject = function () {
        return { x: this.x, y: this.y };
    };
    return Vector;
}());
exports["default"] = Vector;
