"use strict";
exports.__esModule = true;
var THREE = require("../../node_modules/three/build/three.js");
var Ball = (function () {
    function Ball(g) {
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.gravity = new THREE.Vector3(0, -0.01, 0);
        this.game = g;
        console.log("balll created");
        this.draw();
    }
    Ball.prototype.tick = function () {
        this.velocity.add(this.gravity);
        if (this.velocity.y < -1) {
            this.velocity.setY(-1);
        }
        this.circle.position.add(this.velocity);
        //console.log(this.velocity);
        this.game.camera.position.lerp(this.circle.position, 0.05);
        this.game.camera.position.setZ(10);
        //console.log(this.circle.position);
        //console.log(this.game.camera.position);
    };
    Ball.prototype.draw = function () {
        var geometry = new THREE.CircleGeometry(5, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        this.circle = new THREE.Mesh(geometry, material);
        this.game.scene.add(this.circle);
    };
    return Ball;
}());
exports["default"] = Ball;
