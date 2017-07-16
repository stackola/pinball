"use strict";
exports.__esModule = true;
var SpatialHash = require('spatialhash-2d');
var collision = require('../../modules/collision/collision').collision;
var Player_1 = require("./Player");
var Map = (function () {
    function Map() {
        this.bucketSize = 10;
        this.range = {
            x: 0,
            y: 0,
            w: 500,
            h: 500
        };
        this.hash = new SpatialHash(this.range, this.bucketSize);
        var m = new Player_1["default"]({
            x: 1,
            y: 1
        }, 10);
        var m2 = new Player_1["default"]({
            x: 50,
            y: 50
        }, 10);
        this.hash.insert(m);
        this.hash.insert(m2);
        console.log("item count", this.hash.itemCount);
        console.log("query", this.hash.query({
            x: 0,
            y: 0,
            w: 1,
            h: 1
        }));
        console.log(collision(m, m2));
    }
    return Map;
}());
exports["default"] = Map;
