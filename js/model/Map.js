"use strict";
exports.__esModule = true;
var SpatialHash = require('spatialhash-2d');
var collision = require('../../modules/collision/collision').collision;
var Player_1 = require("./Player");
var Map = (function () {
    function Map() {
        this.bucketSize = 100;
        this.range = {
            x: 0,
            y: 0,
            w: 5000,
            h: 5000
        };
        this.hash = new SpatialHash(this.range, this.bucketSize);
        var m = new Player_1["default"]({ x: 1, y: 1 }, 10);
        var m2 = new Player_1["default"]({ x: 4, y: 4 }, 10);
        console.log(m);
        console.log(collision(m, m2));
    }
    return Map;
}());
exports["default"] = Map;
