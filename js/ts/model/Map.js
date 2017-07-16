"use strict";
exports.__esModule = true;
var SpatialHash = require('spatialhash-2d');
var index_js_1 = require("../../modules/polygon-collision-master/dist/index.js");
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
        var m2 = new Player_1["default"]({ x: 25, y: 20 }, 10);
        console.log(m);
        console.log(index_js_1["default"](m, m2));
    }
    return Map;
}());
exports["default"] = Map;
